import { SearchIcon } from "../../../../public/icons";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="p-3 rounded-full hover:bg-bg-surface-hover transition-colors ease-in bg-bg-surface flex items-center gap-3 focus-within:ring-1 focus-within:ring-border-primary">
      <SearchIcon className="text-text-inactive shrink-0" />
      <input value={value} onChange={(e) => onChange(e.target.value)} type="text" className="font-s500 text-text-primary outline-none w-full min-w-0 placeholder:text-text-inactive" placeholder="Search" />
    </div>
  );
}
