import { CloseIcon } from "../../../../public/icons";

type Props = {
  onClick?: () => void;
};
export default function CancelButton({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="py-3 pr-4.5 pl-3 hover:bg-bg-surface transition-colors ease-in rounded-full ring-2 bg-transparent ring-text-inactive cursor-pointer text-text-inactive flex items-center gap-1.5 font-s500"
    >
      <CloseIcon className="text-text-inactive" />
      Cancel
    </button>
  );
}
