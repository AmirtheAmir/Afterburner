"use client";
import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export function useTheme(storageKey = "theme") {
    const [theme, setTheme] = useState<Theme>("dark");

    // on mount: sync DOM + state from localStorage
    useEffect(() => {
        const saved = localStorage.getItem(storageKey) as Theme | null;
        const next: Theme = saved ?? "dark";
        // Avoid calling setState synchronously inside the effect; defer via microtask
        Promise.resolve().then(() => setTheme(next));
        document.documentElement.classList.toggle("light", next === "light");
    }, [storageKey]);

    function toggleTheme() {
        setTheme((prev) => {
            const next: Theme = prev === "dark" ? "light" : "dark";
            document.documentElement.classList.toggle("light", next === "light");
            localStorage.setItem(storageKey, next);
            return next;
        });
    }

    return { theme, toggleTheme, setTheme };
}
