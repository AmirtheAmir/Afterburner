import { SearchIcon } from "../../../../public/icons";

export default function SearchBar() {
  return (
    <div className="p-3 w-full rounded-full hover:bg-bg-surface-hover transition-colors ease-in bg-bg-surface border border-border-secondary flex items-center gap-3">
      <SearchIcon className="text-text-tertiary" />
      <span className="font-s500 text-text-tertiary select-none">
        Search
      </span>
    </div>
  );
}
