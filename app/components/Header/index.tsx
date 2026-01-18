"use client";

import React, { useState } from "react";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onClick?: void;
}

const menuItems = [
  { label: "Тренажер", href: "/TrainingPage" },
  { label: "О проекте", href: "/" },
  // { label: "Поддержать", href: "/SupportPage" },
  // { label: "Автор", href: "/AboutMe" },
  // { label: "Портфолио", href: "/Portfolio" },
];

export const Header: React.FC<HeaderProps> = () => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "grid grid-cols-2 text-[#2C3E50] mx-[150px] my-[25px] text-2xl text-center sm:text-xl sm:mx-[50px]"
      )}
    >
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(pathname === item.href && "text-[#7f90a1] ", item.href==="/TrainingPage" && "text-blue-700 text-4xl sm: text-xl")}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
