"use client";

import { useState } from "react";
import { InputPill, TransmissionToggle, UploadBox } from "../../components";

export default function DetailSection() {
  const [mode, setMode] = useState<"manual" | "auto">("manual");

  return (
    <div className="w-full">
      <div className="items-center justify-between gap-6 grid grid-cols-5">
        <div className="gap-6 flex flex-col">
          <InputPill label="Style / Model" className="" />
          <InputPill label="Manufacturer" className="" />
        </div>
        <div className="gap-6 flex flex-col"> 
          <InputPill label="Color" className="" />
          <InputPill
            label="Price"
            className=""
            endAdornment={<span className="">$</span>}
          />
        </div>
        <div className="col-span-2 gap-6 flex flex-col">
          <TransmissionToggle value={mode} onChange={setMode} />
          <InputPill label="Detail" className="" />
        </div>
        <div className="h-full w-full">
          <UploadBox />
        </div>
      </div>
    </div>
  );
}
