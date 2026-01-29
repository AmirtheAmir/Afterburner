"use client";
import { useMemo, useState } from "react";
import type { Car } from "@/data/cars";

export type CreateCarForm = {
    name: string;
    brand: string;
    color: string;
    priceUSD: string;
    details: string;
    mode: "manual" | "auto";
    imageDataUrl: string;
    imageFileName: string;
};

const EMPTY: CreateCarForm = {
    name: "",
    brand: "",
    color: "",
    priceUSD: "",
    details: "",
    mode: "manual",
    imageDataUrl: "",
    imageFileName: "",
};

function parsePrice(priceUSD: string) {
    const n = Number(String(priceUSD).replace(/[^\d]/g, ""));
    return Number.isFinite(n) ? n : 0;
}

export function useCreateCarForm() {
    const [form, setForm] = useState<CreateCarForm>(EMPTY);

    const actions = useMemo(() => {
        return {
            reset: () => setForm(EMPTY),
            setName: (v: string) => setForm((p) => ({ ...p, name: v })),
            setBrand: (v: string) => setForm((p) => ({ ...p, brand: v })),
            setColor: (v: string) => setForm((p) => ({ ...p, color: v })),
            setPriceUSD: (v: string) => setForm((p) => ({ ...p, priceUSD: v })),
            setDetails: (v: string) => setForm((p) => ({ ...p, details: v })),
            setMode: (v: "manual" | "auto") => setForm((p) => ({ ...p, mode: v })),
            pickImage: (file: File, dataUrl: string) =>
                setForm((p) => ({ ...p, imageDataUrl: dataUrl, imageFileName: file.name })),
            toCar: (): Car | null => {
                if (!form.name.trim() || !form.brand.trim()) return null;
                return {
                    id: `session-${crypto.randomUUID()}`,
                    name: form.name.trim(),
                    brand: form.brand.trim(),
                    gear: form.mode === "manual" ? "Manual" : "Auto",
                    priceUSD: parsePrice(form.priceUSD),
                    color: form.color.trim() || "—",
                    details: form.details.trim() || "—",
                    imageSrc: form.imageDataUrl || "/images/placeholder.png",
                };
            },
        };
    }, [form]);

    return { form, actions };
}
