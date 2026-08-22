"use client";

import React from "react";
import { CursorDot } from "./cursor-dot";

const CursorContext = React.createContext<(label: string | null) => void>(() => {});

export function useCursorLabel() {
  return React.useContext(CursorContext);
}

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [label, setLabel] = React.useState<string | null>(null);
  return (
    <CursorContext.Provider value={setLabel}>
      {children}
      <CursorDot label={label} />
    </CursorContext.Provider>
  );
}
