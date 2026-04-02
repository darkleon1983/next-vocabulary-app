"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";

interface HeaderProps {
  onClick?: void;
}

const menuItems = [
  { label: "Тренажер", href: "/TrainingPage" },
  { label: "О проекте", href: "/" },
];

export const Header: React.FC<HeaderProps> = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-4 bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50 animate-fade-in-up">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold font-code text-sm transition-transform group-hover:scale-105">
            WC
          </div>
          <span className="text-lg font-semibold text-foreground hidden sm:block">
            WordCoder
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`
                  px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium
                  transition-all duration-200 ease-out
                  ${isActive 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
          
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 p-2 rounded-lg bg-secondary hover:bg-accent transition-all duration-200 hover:scale-105"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
