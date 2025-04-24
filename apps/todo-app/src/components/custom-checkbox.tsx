import { CustomCheckboxProps } from '@/types/todo';
import React from 'react';

const CustomCheckbox = ({ checked, onToggle }: CustomCheckboxProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer shrink-0">
      <input
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={onToggle}
      />
      <span className="w-5 h-5 rounded-full border-2 border-primary peer-checked:bg-primary transition-colors"></span>
    </label>
  );
};

export default CustomCheckbox;
