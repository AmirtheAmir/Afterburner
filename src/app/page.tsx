"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cars, type Car } from "@/data/cars";
import { SunIcon, MoonIcon } from "../../public/icons";
import { SearchBar, CreateButton, CarCard } from "@/app/components";
import { SubmitSection, DetailSection } from "@/app/molecules";
import {
  useTheme,
  useCreateCarForm,
  useSessionStorageState,
  useFilteredCars,
} from "@/hooks";

const SESSION_KEY = "sessionCars";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const [query, setQuery] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const [sessionCars, setSessionCars] = useSessionStorageState<Car[]>(
    SESSION_KEY,
    []
  );

  const { form, actions } = useCreateCarForm();

  const allCars = useMemo(() => [...sessionCars, ...cars], [sessionCars]);
  const filteredCars = useFilteredCars(allCars, query);

  function closeCreate() {
    setIsCreating(false);
    actions.reset();
  }

  function handleSubmit() {
    const newCar = actions.toCar();
    if (!newCar) return;

    setSessionCars((prev) => [newCar, ...prev]);

    // keep your animation timing vibe
    setTimeout(() => {
      closeCreate();
    }, 900);
  }

  return (
    <main className="min-h-screen items-center flex flex-col mb-12 gap-12">
      {/* Top bar */}
      <div className="w-2/5 mt-73">
        <div className="grid grid-cols-[auto_1fr_235px] items-center gap-2">
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
                    <SubmitSection onCancel={closeCreate} onSubmit={handleSubmit} />
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
            className="w-3/6 justify-self-auto flex overflow-hidden"
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
                onChangeName={actions.setName}
                onChangeBrand={actions.setBrand}
                onChangeColor={actions.setColor}
                onChangePriceUSD={actions.setPriceUSD}
                onChangeDetails={actions.setDetails}
                onChangeMode={actions.setMode}
                onPickImage={actions.pickImage}
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
