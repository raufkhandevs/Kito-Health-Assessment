import React from 'react';

interface Option {
  value: number | string;
  label: number | string;
}

interface SelectProps {
  value: number;
  onChange: (value: number) => void;
  options: Option[];
}

const Select: React.FC<SelectProps> = ({ value, onChange, options }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(event.target.value);
    onChange(selectedValue);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
