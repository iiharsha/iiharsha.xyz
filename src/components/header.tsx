import { ScrambleText } from "@/components/scramble-text";
import { Building2, MapPin } from "lucide-react";

export function Header() {
    return (
        <header className="mb-16 space-y-4">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
                <span className="inline-block">
                    <ScrambleText text="HARSHAVARDHAN VADLURI" />
                </span>
            </h1>
            <div className="flex flex-col gap-2 text-gray-400">
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    hyderabad, india
                </div>
                <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    currently tech-lead for @recens.co.in
                </div>
            </div>
            <p className="leading-relaxed tracking-wider text-wrap animate-fade-in-up">
                20 year old cs undergrad student. i love building and solving problems.
                passionate about system design and architecture. the terminal is where i live.
                if i&apos;m not coding, i&apos;m probably in the gym, watching movies or building side
                projects for fun.
            </p>
        </header>
    )
}
