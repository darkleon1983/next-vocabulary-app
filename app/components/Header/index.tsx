"use client";

import React, { useState } from "react";
import cn from "classnames";
import Link from "next/link";

interface HeaderProps {
  onClick?: void;
}

const menuItems = [
  { label: "О проекте", href: "/" },
  { label: "Тренажер", href: "/TrainingPage" },
  { label: "Поддержать", href: "/donate" },
  { label: "Автор", href: "/author" },
  { label: "Портфолио", href: "/portfolio" },
];

export const Header: React.FC<HeaderProps> = () => {
  const [isActive, setIsActive] = useState<string>("/");
  console.log(isActive);

  return (
    <div className={cn("grid grid-cols-5")}>
      {menuItems.map((item, index) => (
        <Link
          className={cn(isActive === item.href && "text-[#7f90a1]")}
          href={item.href}
          key={index}
          onClick={() => setIsActive(item.href)}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
