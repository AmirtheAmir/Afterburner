import { CheckIcon } from "../../../../public/icons";

type Props = {
    onClick?: () => void;
    disabled?: boolean;
};

export default function SubmitButton({ onClick, disabled }: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="py-3 pr-4.5 pl-3 bg-brand-primary cursor-pointer rounded-full text-bg-base flex items-center gap-1.5 font-s600"
        >
            <CheckIcon className="text-brand-text" />
            Submit
        </button>
    );
}
