"use client";
import SearchBar from "./components/SearchBar/SearchBar";
import CreateButton from "./components/CreateButton/CreateButton";
import { CarCard } from "./components/CarCard/CarCard";
import { cars } from "../data/cars";
import { MoonIcon } from "../../public/icons";
import { useInfiniteCarousel } from "@/hooks/useInfiniteCarousel";
import { useMemo, useRef } from "react";

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);
  const loopCars = useMemo(() => [...cars, ...cars, ...cars], []);
  useInfiniteCarousel(trackRef as React.RefObject<HTMLElement>, []);

  return (
    <main className="min-h-screen items-center justify-center flex gap-8 flex-col bg-bg-base">
      {/* Top bar */}
      <div className="flex justify-between w-1/3">
        <div className="flex items-center gap-2 w-full">
          <div className="">
            <button className="p-3 rounded-full flex-1 flex items-center justify-center ring-1 ring-border-base">
              <MoonIcon className="text-text-secondary" />
            </button>
          </div>
          <div className="flex flex-2">
            <SearchBar />
          </div>
          <div className="">
            <CreateButton />
          </div>
        </div>
      </div>
      {/* Grid */}
      <section className="w-full">
        <div
          ref={trackRef}
          className="
            flex gap-3 overflow-x-auto flex-nowrap
            scroll-smooth
            overscroll-x-none
            [scrollbar-width:none]
            [-ms-overflow-style:none]
          "
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {loopCars.map((car, idx) => (
            <div
              key={`${car.id}-${idx}`}
              className="min-w-93"
              onMouseEnter={() => trackRef.current?.classList.add("paused")}
              onMouseLeave={() => trackRef.current?.classList.remove("paused")}
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
