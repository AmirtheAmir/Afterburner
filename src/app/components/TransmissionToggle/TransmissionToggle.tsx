"use client";

type Props = {
  value: "manual" | "auto";
  onChange: (v: "manual" | "auto") => void;
};

export default function TransmissionToggle({ value, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 items-center gap-3">
      <div className="p-1 rounded-full ring ring-border-secondary flex items-center">
        <button
          type="button"
          onClick={() => onChange("manual")}
          className={[
            "p-3 w-full rounded-full font-2xs600 transition-all ease-in",
            value === "manual"
              ? "bg-brand-opacity16 text-brand-primary"
              : "text-text-tertiary hover:text-text-secondary",
          ].join(" ")}
        >
          Manual
        </button>
        <button
          type="button"
          onClick={() => onChange("auto")}
          className={[
            "p-3 w-full rounded-full font-2xs600 transition-all ease-in",
            value === "auto"
              ? "bg-brand-opacity16 text-brand-primary"
              : "text-text-tertiary hover:text-text-secondary",
          ].join(" ")}
        >
          Auto
        </button>
      </div>
      <p className="font-3xs500 text-text-tertiary">
        Switch between manual and automatic transmission modes based on driving style.
      </p>
    </div>
  );
}
