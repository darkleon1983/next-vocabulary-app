import React from "react";
import cn from "classnames";
import { Header } from "../components/Header";

export default function Portfolio() {
  return (
    <div>
      <Header/>
      <h2 className={cn("text-3xl")}>Portfolio page</h2>
    </div>
  );
}
