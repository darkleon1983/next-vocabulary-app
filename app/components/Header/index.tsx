"use client";

import React, { useState } from "react";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onClick?: void;
}

const menuItems = [
  { label: "О проекте", href: "/" },
  { label: "Тренажер", href: "/TrainingPage" },
  { label: "Поддержать", href: "/donate" },
  { label: "Автор", href: "/author" },
  { label: "Портфолио", href: "/Portfolio" },
];

export const Header: React.FC<HeaderProps> = () => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "grid grid-cols-5 text-[#2C3E50] mx-[150px] my-[25px] text-2xl text-justify"
      )}
    >
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(pathname === item.href && "text-[#7f90a1]")}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
