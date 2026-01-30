"use client";
import { DollarIcon } from "../../../../public/icons";
import { useId, useRef, useState } from "react";
type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
  endAdornment?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];

  maxLength?: number;       // e.g. 96
  showCounter?: boolean;    // true for Detail
  numericOnly?: boolean;    // true for Price
};
export default function InputPill({
  label,
  value,
  onChange,
  className = "",
  endAdornment,
  inputMode,
  maxLength,
  showCounter,
  numericOnly,
}: Props) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState(false);

  function handleChange(next: string) {
    let v = next;
    if (numericOnly) {
      v = v.replace(/[^\d]/g, "");
    }
    if (typeof maxLength === "number") {
      v = v.slice(0, maxLength);
    }
    onChange(v);
  }
  return (
    <div className="flex flex-col gap-2">
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.focus()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.focus();
        }}
        className={[
          "p-4 rounded-full",
          "flex items-center gap-3",
          "ring-2 ring-border-secondary focus-within:ring-brand-primary",
          "hover:bg-bg-surface transition-colors ease-in",
          "cursor-text",
          className,
        ].join(" ")}
      >
        <div className="flex items-center w-full">
          <input
            id={id}
            ref={inputRef}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={label}
            inputMode={inputMode}
            type={numericOnly ? "text" : "text"}
            className="bg-transparent outline-none w-full font-2xs500 text-brand-primary placeholder:text-text-inactive"
          />
          {endAdornment ? <DollarIcon className="text-text-inactive" /> : null}
        </div>
      </div>
      {/* Counter under input (only when focused) */}
      {showCounter && typeof maxLength === "number" && focused && (
        <div className="  px-4 font-3xs500 flex justify-end text-text-inactive">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  );
}
