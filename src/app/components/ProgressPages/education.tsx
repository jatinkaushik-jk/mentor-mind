import React, { useContext, useEffect, useState } from "react";
import { ProgressContext } from "../../../../Context/ProgressContext";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Command, CommandInput, CommandList, CommandItem, CommandEmpty } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Description: React.FC = () => {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error("Description must be used within a ProgressContext.Provider");
  }

  const { userData, setUserData } = context;
  const [colleges, setColleges] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [customCollege, setCustomCollege] = useState("");
  const [open, setOpen] = useState(false);
  const [customCertificate, setCustomCertificate] = useState("");
  const [currentField, setCurrentField] = useState<string[]>([
    "Tech",
    "Marketing", 
    "Finance",
    "Healthcare",
    "Design",
    "Business",
    "Education",
  ]);
  const [customcurrentField, setCustomcurrentField] = useState("");
  const [opencurrentField, setOpencurrentField] = useState(false);

  // Prefetch college names from API
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch("http://universities.hipolabs.com/search?country=India");
        const data = await response.json();
        const uniqueCollegeNames = Array.from(new Set(data.map((college: { name: string }) => college.name)));
        setColleges(uniqueCollegeNames);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  const handleChange = (name: string, value: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

    // Strictly enforce input visibility
    if (name === "university" && value !== "Other") {
      setCustomCollege(""); // Reset custom input when "Other" is deselected
    }
    if (name === "currentField" && value !== "Other") {
      setCustomcurrentField(""); // Reset custom input when "Other" is deselected
    }
  };

  const handleCustomCollegeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomCollege(event.target.value);
    handleChange("university", event.target.value);
  };

  const handleCustomCertificateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomCertificate(event.target.value);
    // Do not update userData.certifications here to avoid hiding the input field during typing
  };

  const handleCustomcurrentFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomcurrentField(event.target.value);
    handleChange("currentField", event.target.value);
  };

  const formFields = [
    {
      name: "educationLevel",
      label: "Highest Education Level",
      options: ["School", "Undergraduate", "Post Graduate", "Graduate", "Self-Learner"],
    },
    {
      name: "graduationYear", 
      label: "Graduation Year",
      options: ["2025", "2024", "2023", "2022", "Before 2022"],
    },
    {
      name: "certifications",
      label: "Certificates", 
      options: ["AWS Certified", "Google Cloud Certified", "PMP", "None", "Other"],
    },
  ];

  return (
    <form className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold text-primary mb-2">Personal Information</h1>

      {formFields.map((field) => (
        <div key={field.name} className="w-full mb-2 flex-1">
          <label className="text-gray-700 ml-1" htmlFor={field.name}>
            {field.label}
          </label>
          <Select
            onValueChange={(value) => {
              handleChange(field.name, value);
              if (field.name === "certifications" && value !== "Other") {
                setCustomCertificate(""); // Reset custom certificate if not "Other"
              }
            }}
            defaultValue={userData[field.name] || ""}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={`Select ${field.label}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {field.options.map((option, index) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {field.name === "certifications" && userData.certifications === "Other" && (
            <div className="w-full mt-2">
              <label className="text-gray-700 ml-1" htmlFor="customCertificate">Enter Your Certificate</label>
              <Input
                type="text"
                placeholder="Enter your certificate"
                value={customCertificate}
                onChange={handleCustomCertificateChange}
                onBlur={() => handleChange("certifications", customCertificate)} // Update userData.certifications on blur
                className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
          )}
        </div>
      ))}

      {/* College Selection using Combobox */}
      <div className="w-full mb-2 flex-1">
        <label className="text-gray-700 ml-1" htmlFor="university">University Name</label>
        {loading ? (
          <Button variant="outline" className="w-full justify-between cursor-not-allowed bg-white border-2 border-gray-300">
            Loading university...
            <ChevronsUpDown className="opacity-50" />
          </Button>
        ) : (
          <Popover open={open} onOpenChange={(isOpen) => {
            if (userData.university !== "Other") {
              setOpen(isOpen);
            }
          }}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between cursor-pointer bg-white hover:bg-gray-100 border-2 border-gray-300">
                {userData.university || "Select your university"}
                <ChevronsUpDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search your university..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No university found.</CommandEmpty>
                  {colleges.map((college) => (
                    <CommandItem
                      key={college}
                      value={college}
                      onSelect={() => {
                        handleChange("university", college);
                        setOpen(false);
                      }}
                      className={`cursor-pointer p-2 hover:bg-gray-200 ${userData.university === college ? "bg-green-200" : ""}`}
                    >
                      {college}
                      <Check className={cn("ml-auto", userData.university === college ? "opacity-100" : "opacity-0")} />
                    </CommandItem>
                  ))}
                  <CommandItem
                    value="Other"
                    onSelect={() => {
                      handleChange("university", "Other");
                      setOpen(false);
                    }}
                    className={`cursor-pointer p-2 hover:bg-gray-200 ${userData.university === "Other" ? "bg-primary" : ""}`}
                  >
                    Other
                  </CommandItem>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        )}
      </div>

      {/* Custom College Input (Strictly Enforced) */}
      {userData.university === "Other" && (
        <div className="w-full mb-2">
          <label className="text-gray-700 ml-1" htmlFor="customCollege">Enter Your University Name</label>
          <Input
            type="text"
            placeholder="Enter your university name"
            value={customCollege}
            onChange={(event) => setCustomCollege(event.target.value)}
            onBlur={() => handleChange("university", customCollege)}
            className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
      )}

      {/* currentField Selection using Combobox */}
      <div className="w-full mb-2 flex-1">
        <label className="text-gray-700 ml-1" htmlFor="currentField">Current Field</label>
        <Popover open={opencurrentField} onOpenChange={(isOpen) => {
          if (userData.currentField !== "Other") {
            setOpencurrentField(isOpen);
          }
        }}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={opencurrentField} className="w-full justify-between cursor-pointer bg-white hover:bg-gray-100 border-2 border-gray-300">
              {userData.currentField || "Select your field"}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0 ">
            <Command className="w-[30rem]">
              <CommandInput placeholder="Search your field..." className="h-9" />
              <CommandList>
                <CommandEmpty>No currentField found.</CommandEmpty>
                {currentField.map((currentField) => (
                  <CommandItem
                    key={currentField}
                    value={currentField}
                    onSelect={() => {
                      handleChange("currentField", currentField);
                      setOpencurrentField(false);
                    }}
                    className={`cursor-pointer p-2 hover:bg-gray-200 ${userData.currentField === currentField ? "bg-green-200" : ""}`}
                  >
                    {currentField}
                    <Check className={cn("ml-auto", userData.currentField === currentField ? "opacity-100" : "opacity-0")} />
                  </CommandItem>
                ))}
                <CommandItem
                  value="Other"
                  onSelect={() => {
                    handleChange("currentField", "Other");
                    setOpencurrentField(false);
                  }}
                  className={`cursor-pointer p-2 hover:bg-gray-200 ${userData.currentField === "Other" ? "bg-primary" : ""}`}
                >
                  Other
                </CommandItem>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Custom currentField Input (Strictly Enforced) */}
      {userData.currentField === "Other" && (
        <div className="w-full mb-2">
          <label className="text-gray-700 ml-1" htmlFor="customcurrentField">Enter Your current field</label>
          <Input
            type="text"
            placeholder="Enter your current field"
            value={customcurrentField}
            onChange={(event) => setCustomcurrentField(event.target.value)}
            onBlur={() => handleChange("currentField", customcurrentField)}
            className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
      )}
    </form>
  );
};

export default Description;
