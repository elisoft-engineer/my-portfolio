'use client';

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useDialog } from "@/app/providers/Dialog";

const Dialog = () => {
  const { content, close } = useDialog();
  const overlayRef = useRef<HTMLDivElement>(null);
  const lastActiveRef = useRef<Element | null>(null);
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!content) return;

    lastActiveRef.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);

    const focusTimeout = setTimeout(() => {
      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable && focusable.length > 0) {
        focusable[0].focus();
      } else {
        overlayRef.current?.focus();
      }
    }, 0);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
      clearTimeout(focusTimeout);
      if (lastActiveRef.current instanceof HTMLElement) {
        lastActiveRef.current.focus();
      }
    };
  }, [content, close]);

  if (!mounted || !content) return null;

  return createPortal(
    <div
      className="dialog-overlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        ref={overlayRef}
        className="dialog-container"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        <div className="dialog-panel" onMouseDown={(e) => e.stopPropagation()}>
          {content}
        </div>

        <button
          className="dialog-close"
          aria-label="Close dialog"
          onClick={() => close()}
          type="button"
        >
          <X size={24} className="icon" />
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Dialog;