import { PlusIcon } from "../../../../public/icons";

type Props = {
  onClick?: () => void
}

export default function CreateButton({ onClick }: Props) {
  return (
    <button type="button" onClick={onClick} className="py-3 pr-4.5 pl-3 hover:bg-bg-surface transition-colors ease-in rounded-full ring-1 ring-brand-primary  text-brand-primary flex items-center gap-1.5 font-s600">
      <PlusIcon className="" />
      Create
    </button>
  );
}
