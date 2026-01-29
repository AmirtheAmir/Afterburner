"use client";
import SearchBar from "./components/SearchBar/SearchBar";
import CreateButton from "./components/CreateButton/CreateButton";
import { CarCard } from "./components/CarCard/CarCard";
import { cars, type Car } from "../data/cars";
import { SunIcon, MoonIcon } from "../../public/icons";
import { useEffect, useMemo, useState } from "react";
import SubmitSection from "./molecules/SubmitSection/SubmitSection";
import DetailSection from "./molecules/DetailSection/DetailSection";
import { AnimatePresence, motion } from "framer-motion";

type Theme = "dark" | "light";

type CreateCarForm = {
  name: string;
  brand: string;
  color: string;
  priceUSD: string;
  details: string;
  mode: "manual" | "auto";
  imageDataUrl: string;
  imageFileName: string;
};

const SESSION_KEY = "sessionCars";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [query, setQuery] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const [sessionCars, setSessionCars] = useState<Car[]>([]);

  const [form, setForm] = useState<CreateCarForm>({
    name: "",
    brand: "",
    color: "",
    priceUSD: "",
    details: "",
    mode: "manual",
    imageDataUrl: "",
    imageFileName: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const initialTheme: Theme = saved ?? "dark";
    document.documentElement.classList.toggle("light", initialTheme === "light");
  }, []);

  useEffect(() => {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as Car[];
      // Avoid calling setState synchronously in the effect body per React best practices.
      // Instead, use a microtask to defer the update and prevent cascading renders.
      Promise.resolve().then(() => setSessionCars(parsed));
    } catch {
    }
  }, []);

  function toggleTheme() {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("light", next === "light");
      localStorage.setItem("theme", next);
      return next;
    });
  }

  const allCars = useMemo(() => {
    return [...sessionCars, ...cars];
  }, [sessionCars]);

  const filteredCars = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allCars;
    return allCars.filter((car) => {
      return (
        car.name.toLowerCase().includes(q) ||
        car.brand.toLowerCase().includes(q)
      );
    });
  }, [query, allCars]);

  function resetForm() {
    setForm({
      name: "",
      brand: "",
      color: "",
      priceUSD: "",
      details: "",
      mode: "manual",
      imageDataUrl: "",
      imageFileName: "",
    });
  }

  function saveSessionCars(next: Car[]) {
    setSessionCars(next);
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(next));
  }

  function handleSubmit() {
    if (!form.name.trim() || !form.brand.trim()) return;

    const priceNumber = Number(String(form.priceUSD).replace(/[^\d]/g, ""));
    const safePrice = Number.isFinite(priceNumber) ? priceNumber : 0;

    const newCar: Car = {
      id: `session-${crypto.randomUUID()}`,
      name: form.name.trim(),
      brand: form.brand.trim(),
      gear: form.mode === "manual" ? "Manual" : "Auto",
      priceUSD: safePrice,
      color: form.color.trim() || "—",
      details: form.details.trim() || "—",
      imageSrc: form.imageDataUrl || "/images/placeholder.png", // add a placeholder file if you want
    };
    const next = [newCar, ...sessionCars];
    saveSessionCars(next);

    // Remove 'await' since 'handleSubmit' is not async
    setTimeout(() => {
      setIsCreating(false);
      resetForm();
    }, 900);
    return; // Prevent the code below from running immediately
    setIsCreating(false);
    resetForm();
  }

  return (
    <main className="min-h-screen items-center flex flex-col mb-12 gap-12">
      {/* Top bar */}
      <div className="w-2/5 mt-73">
        <div className="grid grid-cols-[auto_1fr_235px]  items-center gap-2">
          {/* left */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-3 cursor-pointer rounded-full inline-flex items-center justify-center"
          >
            {theme === "dark" ? (
              <SunIcon className="text-text-inactive hover:text-text-tertiary transition-colors ease-in" />
            ) : (
              <MoonIcon className="text-text-inactive hover:text-text-tertiary transition-colors ease-in" />
            )}
          </button>
          {/* middle */}
          <div className="min-w-0">
            <SearchBar value={query} onChange={setQuery} />
          </div>

          {/* right */}
          <div className="justify-self-base ml-1">
            <div className="relative h-12 flex">
              <AnimatePresence mode="wait" initial={false}>
                {!isCreating ? (
                  <motion.div
                    key="create"
                    className="absolute left-0"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <CreateButton onClick={() => setIsCreating(true)} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="submit"
                    className="absolute right-0"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <SubmitSection
                      onCancel={() => {
                        setIsCreating(false);
                        resetForm();
                      }}
                      onSubmit={handleSubmit}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
      {/* DetailSection appears when creating */}
      <AnimatePresence initial={false}>
        {isCreating && (
          <motion.div
            key="detail"
            className="w-3/6 justify-self-auto  flex overflow-hidden"
            initial={{ height: 0, opacity: 0, y: -6 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* inner wrapper prevents content from being clipped weirdly */}
            <motion.div
              className="w-full h-34 m-1"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            >
              <DetailSection
                name={form.name}
                brand={form.brand}
                color={form.color}
                priceUSD={form.priceUSD}
                details={form.details}
                mode={form.mode}
                imageFileName={form.imageFileName}
                onChangeName={(v) => setForm((p) => ({ ...p, name: v }))}
                onChangeBrand={(v) => setForm((p) => ({ ...p, brand: v }))}
                onChangeColor={(v) => setForm((p) => ({ ...p, color: v }))}
                onChangePriceUSD={(v) => setForm((p) => ({ ...p, priceUSD: v }))}
                onChangeDetails={(v) => setForm((p) => ({ ...p, details: v }))}
                onChangeMode={(v) => setForm((p) => ({ ...p, mode: v }))}
                onPickImage={(file, dataUrl) =>
                  setForm((p) => ({
                    ...p,
                    imageDataUrl: dataUrl,
                    imageFileName: file.name,
                  }))
                }
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
