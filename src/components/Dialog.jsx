import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useDialog } from "../context/DialogContext";

/**
 * Dialog component — reads content from context and renders a portal.
 * Features:
 *  - Escape to close
 *  - Click overlay to close
 *  - Focus trap (basic): save last focus and restore on close
 *  - ARIA: role="dialog" aria-modal="true"
 */
const Dialog = () => {
  const { content, close } = useDialog();
  const overlayRef = useRef(null);
  const lastActiveRef = useRef(null);

  useEffect(() => {
    if (!content) return;

    // Save last focused element and focus the dialog container
    lastActiveRef.current = document.activeElement;
    // prevent body scroll while dialog open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") {
        close();
      }
      // optionally add tab-trapping here
      if (e.key === "Tab") {
        // basic trap: keep focus inside overlay
        const focusable = overlayRef.current?.querySelectorAll(
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
    // focus first focusable element or overlay container for a11y
    setTimeout(() => {
      const focusable = overlayRef.current?.querySelectorAll(
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
      // restore focus
      try {
        lastActiveRef.current?.focus?.();
      } catch (e) {}
    };
  }, [content, close]);

  if (!content) return null;

  return ReactDOM.createPortal(
    <div
      className="dialog-overlay"
      role="presentation"
      onMouseDown={(e) => {
        // close if clicking the overlay (not the dialog content)
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
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Dialog;
