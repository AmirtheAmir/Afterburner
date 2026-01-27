import { PlusIcon } from "../../../../public/icons";

export default function CreateButton() {
  return (
    <div className="py-3 pr-4.5 pl-3 hover:bg-bg-surface transition-colors ease-in rounded-full ring-2 ring-brand-primary  text-brand-primary flex items-center gap-1.5">
      <PlusIcon className="" />
      <span className="font-s600">Create</span>
    </div>
  );
}
