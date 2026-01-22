import { PlusIcon } from "../../../../public/icons";

export default function CreateButton() {
  return (
    <div className="py-3 pr-4.5 pl-3 rounded-full bg-brand-primary text-text-primary flex items-center gap-1.5 select-none">
      <PlusIcon className="" />
      <span className="font-s600">Create</span>
    </div>
  );
}
