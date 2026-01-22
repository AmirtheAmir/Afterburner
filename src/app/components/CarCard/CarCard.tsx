
import Image from "next/image";
import type { Car } from "@/data/cars";
import { GearIcon, PriceIcon, BrushIcon } from "../../../../public/icons";

function formatUSD(n: number) {
    return n.toLocaleString("en-US");
}

export function CarCard({ car }: { car: Car }) {
    return (
        <article className="group rounded-5xl p-1.5 bg-bg-surface flex flex-col overflow-hidden gap-3">
            <div className="relative aspect-square ">
                <Image
                    src={car.imageSrc}
                    alt={car.name}
                    fill
                    className="object-cover object-left rounded-4xl"
                    priority={false}
                />
            </div>
            {/* Content */}
            <div className="flex flex-col gap-3">
                {/* Pills row */}
                <div className="flex flex-wrap items-start gap-2 font-2xs500 px-1">
                    <span className="inline-flex felx justify-center items-center gap-1.5 rounded-full pr-2.5 pl-1.5 py-1.5 bg-bg-elevated text-text-primary">
                        {/* gear icon */}
                        <GearIcon />
                        {car.gear}
                    </span>
                    <span className="inline-flex felx justify-center items-center gap-1.5 rounded-full pr-2.5 pl-1.5 py-1.5 bg-bg-elevated text-text-primary">
                        {/* price icon */}
                        <PriceIcon />
                        ${formatUSD(car.priceUSD)}
                    </span>
                    <span className="inline-flex felx justify-center items-center gap-1.5 rounded-full pr-2.5 pl-1.5 py-1.5 bg-bg-elevated text-text-primary">
                        {/* brush icon */}
                        <BrushIcon />
                        {car.color}
                    </span>
                </div>
                {/* text */}
                <div className="flex flex-col gap-1.5 px-1 pb-3">
                    <div className="flex flex-col">
                        <span className="text-text-primary font-l600">
                            {car.name}
                        </span>
                        <span className="text-text-tertiary font-m500">{car.brand}</span>
                    </div>
                    <p className="text-text-secondary font-xs500">
                        {car.details}
                    </p>
                </div>
            </div>
        </article>
    );
}
