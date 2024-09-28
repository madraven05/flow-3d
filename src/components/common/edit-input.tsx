import React, { InputHTMLAttributes } from "react";
import Input from "./input";
import { Flow3DNodeKeys } from "../models/node";

interface EditInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Flow3DNodeKeys;
  value: string;
}

const EditInput: React.FC<EditInputProps> = ({
  value,
  label,
  name,
  onChange
}) => {

  return (
    <div className="flex gap-5 items-center justify-between">
      <p className="text-xs font-semibold">{label}</p>
      <Input name={name} value={value} onChange={onChange}/>
    </div>
  );
};

export default EditInput;
