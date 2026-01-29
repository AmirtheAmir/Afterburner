"use client";
import { UploadIcon, SuccessIcon } from "../../../../public/icons";
import { useRef } from "react";

type Props = {
  onPick: (file: File, dataUrl: string) => void;
  fileName?: string;
};

export default function UploadBox({ onPick, fileName }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  async function handleFile(file: File | null) {
    if (!file) return;

    // convert to dataURL so we can store in sessionStorage + show in cards
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });

    onPick(file, dataUrl);
  }

  const isUploaded = Boolean(fileName);

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className={[
        "h-30 w-full rounded-2xl",
        "border-2 border-dashed border-brand-primary",
        "flex gap-1.5 flex-col items-center justify-center",
        "text-text-inactive hover:bg-bg-surface transition-colors",
      ].join(" ")}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg, image/jpg"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
      />
      <div className="flex items-center gap-2 justify-center font-2xs500">
        {isUploaded ? (
          <SuccessIcon className="text-brand-primary" />
        ) : (
          <UploadIcon className="text-text-tertiary" />
        )}

        <span className={isUploaded ? "text-brand-primary" : "text-text-tertiary"}>
          {isUploaded ? "Image Uploaded" : "Upload Image"}
        </span>
      </div>
      <div className="font-3xs500 text-text-inactive">
        {fileName ? fileName : "PNG, JPG up to 5mb"}
      </div>
    </button>
  );
}
