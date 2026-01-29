"use client";
import { InputPill, TransmissionToggle, UploadBox } from "../../components";

type Props = {
  name: string;
  brand: string;
  color: string;
  priceUSD: string;
  details: string;
  mode: "manual" | "auto";
  imageFileName: string;
  onChangeName: (v: string) => void;
  onChangeBrand: (v: string) => void;
  onChangeColor: (v: string) => void;
  onChangePriceUSD: (v: string) => void;
  onChangeDetails: (v: string) => void;
  onChangeMode: (v: "manual" | "auto") => void;
  onPickImage: (file: File, dataUrl: string) => void;
};

export default function DetailSection({
  name,
  brand,
  color,
  priceUSD,
  details,
  mode,
  imageFileName,
  onChangeName,
  onChangeBrand,
  onChangeColor,
  onChangePriceUSD,
  onChangeDetails,
  onChangeMode,
  onPickImage,
}: Props) {
  return (
    <div className="w-full">
      <div className="items-start justify-between gap-6 grid grid-cols-5">
        <div className="gap-6 flex flex-col">
          <InputPill label="Style / Model" value={name} onChange={onChangeName} />
          <InputPill label="Manufacturer" value={brand} onChange={onChangeBrand} />
        </div>
        <div className="gap-6 flex flex-col">
          <InputPill label="Color" value={color} onChange={onChangeColor} />
          <InputPill
            label="Price"
            value={priceUSD}
            onChange={onChangePriceUSD}
            endAdornment
            inputMode="numeric"
            numericOnly
          />
        </div>
        <div className="col-span-2 gap-6 flex flex-col  ">
          <TransmissionToggle value={mode} onChange={onChangeMode} />
          <InputPill
            label="Detail"
            value={details}
            onChange={onChangeDetails}
            maxLength={96}
            showCounter
          />
        </div>

        <div className="h-full w-full">
          <UploadBox onPick={onPickImage} fileName={imageFileName} />
        </div>
      </div>
    </div>
  );
}
