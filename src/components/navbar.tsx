'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Navbar() {
    const router = useRouter();

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (
                document.activeElement?.tagName === "INPUT" ||
                document.activeElement?.tagName === "TEXTAREA" ||
                event.target instanceof HTMLInputElement
            ) {
                return
            }

            switch (event.key.toLowerCase()) {
                case "h":
                    router.push('/')
                    break
                case "b":
                    router.push('/blog')
                    break
                case "p":
                    router.push('projects')
                    break
            }
        }

        window.addEventListener("keydown", handleKeyPress)
        return () => window.removeEventListener("keydown", handleKeyPress)
    }, [router]);

    return (
        <nav className="flex items-center justify-between mb-12 text-lg">
            <div className="flex space-x-4">
                <Link
                    href="/"
                    className="hover:text-accent transition-colors duration-200"
                >
                    [h] home
                </Link>
                <Link
                    href="/blog"
                    className="hover:text-accent transition-colors duration-200"
                >
                    [b] blog
                </Link>
                <Link
                    href="/projects"
                    className="hover:text-accent transition-colors duration-200"
                >
                    [p] projects
                </Link>
            </div>
        </nav>
    )
};
