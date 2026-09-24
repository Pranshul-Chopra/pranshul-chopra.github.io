"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches || !window.matchMedia("(hover: hover)").matches) {
      return;
    }

    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, select, [role='button'], .clickable");
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.2;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <>
      {/* Trailing Gold/Sky Halo Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-[width,height,background-color,border-color,opacity] duration-200 ease-out hidden md:block ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isHovered
            ? "w-12 h-12 bg-gold/15 border-2 border-gold-bright shadow-lg shadow-gold/30"
            : isClicking
            ? "w-7 h-7 bg-gold/30 border border-gold"
            : "w-8 h-8 bg-sky/5 border border-sky/30 shadow-sm"
        }`}
        style={{
          willChange: "transform",
        }}
      />

      {/* 0ms Hardware-Locked Central Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[10000] rounded-full transition-[width,height,background-color,opacity] duration-150 hidden md:block ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isHovered
            ? "w-2.5 h-2.5 bg-gold-bright shadow-md shadow-gold"
            : isClicking
            ? "w-3 h-3 bg-amber-400"
            : "w-1.5 h-1.5 bg-gold"
        }`}
        style={{
          willChange: "transform",
          boxShadow: isHovered
            ? "0 0 12px rgba(212, 168, 67, 0.9)"
            : "0 0 6px rgba(212, 168, 67, 0.7)",
        }}
      />
    </>
  );
}
