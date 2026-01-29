
import Image from "next/image";
import type { Car } from "@/data/cars";
import { GearIcon, PriceIcon, BrushIcon } from "../../../../public/icons";

function formatUSD(n: number) {
    return n.toLocaleString("en-US");
}

export function CarCard({ car }: { car: Car }) {
    return (
        <article className="group rounded-3xl p-2 bg-bg-surface ring ring-border-primary flex flex-col gap-2">
            <div className="relative aspect-354/283 overflow-hidden rounded-2xl">
                <Image
                    src={car.imageSrc}
                    alt={car.name}
                    fill
                    className="object-cover object-left"
                    priority={false}
                />
            </div>
            {/* Content */}
            <div className="flex flex-col gap-3">
                {/* Pills row */}
                <div className="flex flex-wrap items-start gap-2 font-2xs500">
                    <span className="inline-flex felx justify-center items-center gap-2 rounded-full pr-3 pl-2 py-1.5 text-text-secondary ring ring-border-secondary">
                        {/* gear icon */}
                        <GearIcon />
                        {car.gear}
                    </span>
                    <span className="inline-flex felx justify-center items-center gap-2 rounded-full pr-3 pl-2 py-1.5 text-text-secondary ring ring-border-secondary">
                        {/* price icon */}
                        <PriceIcon />
                        ${formatUSD(car.priceUSD)}
                    </span>
                    <span className="inline-flex felx justify-center items-center gap-2 rounded-full pr-3 pl-2 py-1.5 text-text-secondary ring ring-border-secondary">
                        {/* brush icon */}
                        <BrushIcon />
                        {car.color}
                    </span>
                </div>
                {/* text */}
                <div className="flex flex-col gap-1 px-1 pb-1">
                    <div className="flex flex-col">
                        <span className="text-text-primary font-l600">
                            {car.name}
                        </span>
                        <span className="text-text-tertiary font-s500">{car.brand}</span>
                    </div>
                    <p className="text-text-secondary font-xs500">
                        {car.details}
                    </p>
                </div>
            </div>
        </article>
    );
}
