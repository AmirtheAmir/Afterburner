import { SearchIcon } from "../../../../public/icons";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="p-3 w-full rounded-full hover:bg-bg-surface-hover transition-colors ease-in bg-bg-surface flex items-center gap-3">
      <SearchIcon className="text-text-inactive" />
      <input value={value} onChange={(e) => onChange(e.target.value)} type="text" className="font-s500 text-text-primary outline-none placeholder:text-text-inactive" placeholder="Search" />
    </div>
  );
}
