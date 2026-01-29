"use client";
import { DollarIcon } from "../../../../public/icons";
type Props = {
    label: string;
    className?: string;
    endAdornment?: React.ReactNode; // e.g. "$"
};

export default function InputPill({ label, className = "", endAdornment }: Props) {
    return (
        <div
            className={[
                "p-4 rounded-full",
                "flex items-center gap-3",
                "ring ring-border-secondary",
                "text-text-tertiary justify-between hover:bg-bg-surface transiton-color ease-in",
                className,
            ].join(" ")}
        >
            <span className="font-2xs500">{label}</span>

            {endAdornment ? (
                <DollarIcon />
            ) : null}
        </div>
    );
}
