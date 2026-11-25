"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import cn from "classnames";
import Link from "next/link";

export default function GuestBanner() {
  const { user } = useAuth();
  if (user) {
    return null;
  }
  return (
    <div
      className={cn(
        "flex justify-between items-center bg-muted border border-border rounded-2xl p-4 flex-wrap gap-3 px-4 sm:px-6 lg:px-8",
      )}
    >
      <p className={cn("text-sm text-foreground")}>
        Вы в гостевом режиме. Войдите, чтобы сохранять прогресс и использовать
        умное повторение
      </p>
      <Link
        href="/login"
        className={cn(
          "bg-primary text-white rounded-xl px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors shrink-0",
        )}
      >
        Войти
      </Link>
    </div>
  );
}
