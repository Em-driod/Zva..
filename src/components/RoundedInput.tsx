// components/RoundedInput.js

import React from 'react';

interface RoundedInputProps {
  placeholder: string;
  value: string;
  type?: string; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RoundedInput: React.FC<RoundedInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="px-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default RoundedInput;
