import { useContext, ChangeEvent, FormEvent } from 'react';
import { ProgressContext } from '../../../../Context/ProgressContext';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Personal Information Submitted", userData);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <div>
        <h1 className='text-2xl font-semibold text-primary mb-2'>Personal Information</h1>
      </div>

      {formFields.map((field) => (
        <div key={field.name} className='w-full mb-2 flex-1'>
          <label className='text-gray-700 ml-1' htmlFor={field.name}>
            {field.label}
          </label>
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

      <div className="w-full mb-2">
        <label className='text-gray-700 ml-1' htmlFor="ageGroup">Age Group</label>
        <Select onValueChange={handleAgeChange} defaultValue={userData.ageGroup || ""}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Age Group" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="16-20">16-20</SelectItem>
              <SelectItem value="21-25">21-25</SelectItem>
              <SelectItem value="26-30">26-30</SelectItem>
              <SelectItem value="31-35">31-35</SelectItem>
              <SelectItem value="36+">Greater than 36</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </form>
  );
}
