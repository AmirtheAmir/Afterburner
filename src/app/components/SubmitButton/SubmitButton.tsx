// SubmitButton.tsx
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, SuccessIcon24 } from "../../../../public/icons";
import { useState } from "react";
type Props = {
    onClick?: () => void | Promise<void>;
    disabled?: boolean;
};
type Status = "idle" | "loading" | "success";
export default function SubmitButton({ onClick, disabled }: Props) {
    const [status, setStatus] = useState<Status>("idle");
    const isBusy = status !== "idle";
    const isDisabled = disabled || isBusy;
    async function handleClick() {
        if (isDisabled) return;
        try {
            setStatus("loading");

            // Run your submit logic (can be sync or async)
            await onClick?.();

            // Optional: keep loader visible a bit so it feels intentional
            await wait(450);

            setStatus("success");
            await wait(550);
        } finally {
            setStatus("idle");
        }
    }
    return (
        <motion.button
            type="button"
            onClick={handleClick}
            disabled={isDisabled}
            className="py-3 pr-4.5 pl-3 bg-brand-primary rounded-full text-bg-base flex items-center gap-1.5 font-s600 "
            animate={{
                // circle when loading/success, pill when idle
                width: status === "idle" ? 113 : 113,
                paddingLeft: status === "idle" ? 12 : 12,
                paddingRight: status === "idle" ? 18 : 18,
                paddingTop: status === "idle" ? 12 : 12,
                paddingBottom: status === "idle" ? 12 : 12,
                justifyContent: status === "idle" ? "center" : "center",
            }}
            transition={{ duration: 0.22, ease: "easeIn" }}
            style={{ willChange: "width" }}
        >
            <AnimatePresence mode="wait" initial={false}>
                {status === "idle" && (
                    <motion.span
                        key="idle"
                        className="inline-flex items-center gap-1.5"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                    >
                        <CheckIcon className="text-brand-text font-s600" />
                        <span>Submit</span>
                    </motion.span>
                )}

                {status === "loading" && (
                    <motion.span
                        key="loading"
                        className="inline-flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.15 }}
                    >
                        {/* Spinner circle */}
                        <motion.span
                            className="size-6 rounded-full border-2 border-bg-base border-t-transparent"
                            aria-label="Submitting"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        />
                    </motion.span>
                )}

                {status === "success" && (
                    <motion.span
                        key="success"
                        className="inline-flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.15, ease: "easeIn" }}
                    >
                        <SuccessIcon24 className="text-" />
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
function wait(ms: number) {
    return new Promise<void>((r) => setTimeout(r, ms));
}
