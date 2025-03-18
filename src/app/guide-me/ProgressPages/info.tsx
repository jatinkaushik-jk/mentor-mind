import { useContext, ChangeEvent, FormEvent } from 'react';
import { ProgressContext } from '../../../../Context/ProgressContext';
import { Input } from '@/components/ui/guideInput';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function Info() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error("Info must be used within a ProgressContext.Provider");
  }

  const { userData, setUserData } = context;

  const formFields = [
    { name: "userName", type: "text", placeholder: "Enter your name", label: "User Name" },
    { name: "email", type: "email", placeholder: "Enter your email", label: "Email" },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleAgeChange = (value: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      ageGroup: value,
    }));
  };

  const handleEducationChange = (value: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      educationLevel: value,
    }));
  };

  const educationOptions = ["School", "Undergraduate", "Post Graduate", "Graduate", "Self-Learner"];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log("Personal Information Submitted", userData);
  };

  const showSelect = (label: string, name: string, options: string[], value: string, onChange: (value: string) => void) => (
    <div className="w-full mb-2">
      <Label className='ml-1 mb-1.5' htmlFor={name}>{label}</Label>
      <Select onValueChange={onChange} defaultValue={value || ""}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <div>
        <h1 className='text-2xl font-semibold text-primary mb-2'>Personal Information</h1>
      </div>

      {formFields.map((field) => (
        <div key={field.name} className='w-full mb-2 flex-1'>
          <Label className='ml-1 mb-1.5' htmlFor={field.name}>
            {field.label}
          </Label>
          <Input
            onChange={handleChange}
            autoComplete='off'
            value={userData[field.name] || ""}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
          />
        </div>
      ))}

      {showSelect("Age Group", "ageGroup", ["16-20", "21-25", "26+"], userData.ageGroup, handleAgeChange)}
      {showSelect("Current Education", "educationLevel", educationOptions, userData.educationLevel, handleEducationChange)}

    </form>
  );
}
