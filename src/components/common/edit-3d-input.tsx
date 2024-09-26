import React from "react";
import Input from "./input";

interface Edit3DInputProps {
    id: string,
  label: string;
  values?: [number, number, number]
}

const Edit3DInput: React.FC<Edit3DInputProps> = ({ label, values=[0,0,0] }) => {
  return (
    <div className="flex gap-5 justify-between w-full items-center">
      <p className="text-xs font-semibold">{label}</p>
      <div className="flex gap-5">
        <div className="flex flex-col items-center -mt-4 text-xs gap-0.5">
          <p>X</p>
          <Input value={values[0]} className="w-7 h-7 rounded-md bg-black/10 p-1 text-center" />
        </div>
        <div className="flex flex-col items-center -mt-4 text-xs gap-0.5">
          <p>Y</p>
          <Input value={values[1]} className="w-7 h-7 rounded-md bg-black/10 p-1 text-center" />
        </div>
        <div className="flex flex-col items-center -mt-4 text-xs gap-0.5">
          <p>Z</p>
          <Input value={values[2]} className="w-7 h-7 rounded-md bg-black/10 p-1 text-center" />
        </div>
      </div>
    </div>
  );
};

export default Edit3DInput;
