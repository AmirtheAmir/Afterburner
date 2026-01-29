"use client";
import { useEffect, useState } from "react";

export function useSessionStorageState<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        const raw = sessionStorage.getItem(key);
        if (!raw) return;
        try {
            // Avoid calling setState synchronously inside the effect. Defer to a microtask.
            Promise.resolve().then(() => setValue(JSON.parse(raw) as T));
        } catch {
            // ignore bad data
        }
    }, [key]);

    function setAndPersist(next: T | ((prev: T) => T)) {
        setValue((prev) => {
            const computed = typeof next === "function" ? (next as (prev: T) => T)(prev) : next;
            sessionStorage.setItem(key, JSON.stringify(computed));
            return computed;
        });
    }

    return [value, setAndPersist] as const;
}
