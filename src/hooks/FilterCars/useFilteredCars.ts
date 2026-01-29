import { useMemo } from "react";
import type { Car } from "@/data/cars";

export function useFilteredCars(allCars: Car[], query: string) {
    return useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return allCars;
        return allCars.filter(
            (car) =>
                car.name.toLowerCase().includes(q) ||
                car.brand.toLowerCase().includes(q)
        );
    }, [allCars, query]);
}
