"use client";
import { UploadIcon } from "../../../../public/icons";

export default function UploadBox() {
  return (
    <div
      className={[
        "h-full w-full rounded-2xl",
        "border-2 border-dashed border-brand-primary",
        "flex gap-1.5 flex-col items-center justify-center",
        "text-text-inactive",
      ].join(" ")}
    >
      <div className="flex items-center text-text-tertiary gap-2 font-2xs500">
        <UploadIcon />
        <span>Upload Image</span>
      </div>
      <div className="font-3xs500 text-text-inactive">PNG, JPG up to 5mb</div>
    </div>
  );
}
