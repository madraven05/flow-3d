import React from "react";
import Input from "./input";
import { Flow3DNodeKeys } from "../models/node";

interface Edit3DInputProps {
  name: Flow3DNodeKeys;
  label: string;
  componentId: string;
  values?: [number, number, number];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, idx: 0 | 1 | 2) => void;
}

const Edit3DInput: React.FC<Edit3DInputProps> = ({
  label,
  values = [0, 0, 0],
  name,
  onChange,
}) => {
  return (
    <div className="flex gap-5 justify-between w-full items-center">
      <p className="text-xs font-semibold">{label}</p>
      <div className="flex gap-5">
        <div className="flex flex-col items-center -mt-4 text-xs gap-0.5">
          <p>X</p>
          <Input
            onChange={(e) => onChange(e, 0)}
            name={`${name}_X`}
            type="number"
            value={values[0]}
            className="w-10 h-7 rounded-md bg-black/10 p-1 text-center"
          />
        </div>
        <div className="flex flex-col items-center -mt-4 text-xs gap-0.5">
          <p>Y</p>
          <Input
            onChange={(e) => onChange(e, 1)}
            type="number"
            name={`${name}_Y`}
            value={values[1]}
            className="w-10 h-7 rounded-md bg-black/10 p-1 text-center"
          />
        </div>
        <div className="flex flex-col items-center -mt-4 text-xs gap-0.5">
          <p>Z</p>
          <Input
            onChange={(e) => onChange(e, 2)}
            type="number"
            name={`${name}_Z`}
            value={values[2]}
            className="w-10 h-7 rounded-md bg-black/10 p-1 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Edit3DInput;
