"use client";

import React from "react";

function subscribeFinePointer(callback: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}
function getFinePointerSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}
function getFinePointerServerSnapshot() {
  return false;
}

const EASE = 0.16;
const OFFSET_X = 20;
const OFFSET_Y = 20;

export function CursorDot({ label }: { label: string | null }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const enabled = React.useSyncExternalStore(subscribeFinePointer, getFinePointerSnapshot, getFinePointerServerSnapshot);

  React.useEffect(() => {
    if (!enabled) return;

    const target = { x: -100, y: -100 };
    const pos = { ...target };
    let frame: number;
    let started = false;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!started) {
        pos.x = target.x;
        pos.y = target.y;
        started = true;
      }
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      pos.x += (target.x - pos.x) * EASE;
      pos.y += (target.y - pos.y) * EASE;
      const el = ref.current;
      if (el) el.style.transform = `translate3d(${pos.x + OFFSET_X}px, ${pos.y + OFFSET_Y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  const active = Boolean(label);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 200,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: active ? "64px" : "10px",
        height: active ? "64px" : "10px",
        borderRadius: "50%",
        background: active ? "var(--ev-ink)" : "var(--ev-accent)",
        color: "var(--ev-paper)",
        fontFamily: "var(--ev-font-mono)",
        fontSize: "10px",
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: "var(--ev-ls-label)",
        transition: "width var(--ev-dur-base) var(--ev-ease-out), height var(--ev-dur-base) var(--ev-ease-out), background var(--ev-dur-base) var(--ev-ease-out)",
      }}
    >
      {label}
    </div>
  );
}
