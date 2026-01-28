"use client";
import SearchBar from "./components/SearchBar/SearchBar";
import CreateButton from "./components/CreateButton/CreateButton";
import { CarCard } from "./components/CarCard/CarCard";
import { cars } from "../data/cars";
import { SunIcon, MoonIcon } from "../../public/icons";
import { useEffect, useState, useMemo } from "react";

type Theme = "dark" | "light"

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");

  const [query, setQuery] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    // console.log("saved theme:", saved);
    const initialTheme: Theme = saved ?? "dark";
    // console.log("initial theme used:", initialTheme);
    document.documentElement.classList.toggle("light", initialTheme === "light");
  }, []);

  function toggleTheme() {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";

      document.documentElement.classList.toggle("light", next === "light");
      localStorage.setItem("theme", next);
      return next;
    });
  }

  const filteredCars = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cars;

    return cars.filter((car) => {
      return (
        car.name.toLowerCase().includes(q) ||
        car.brand.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <main className="min-h-screen items-center flex flex-col mb-12 gap-12">
      {/* Top bar */}
      <div className="flex justify-between w-1/3 mt-73">
        <div className="flex items-center gap-2 w-full">
          <div className="">
            <button type="button" onClick={toggleTheme} aria-label="Toggle theme" className="p-3 rounded-full flex-1 flex items-center justify-center  ">
              {theme === "dark" ? (
                <SunIcon className="text-text-inactive hover:text-text-tertiary transition-colors ease-in" />
              ) : (
                <MoonIcon className="text-text-inactive hover:text-text-tertiary transition-colors ease-in" />
              )}
            </button>
          </div>
          <div className="flex flex-2">
            <SearchBar value={query} onChange={setQuery} />
          </div>
          <div className="">
            <CreateButton />
          </div>
        </div>
      </div>
      {/* Grid */}
      <section className="w-full">
        <div className="grid grid-cols-4 mx-46 gap-6">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        {filteredCars.length === 0 && (
          <p className="text-text-tertiary font-s500 text-center mt-8">
            No cars found 🤷
          </p>
        )}
      </section>
    </main>
  );
}
