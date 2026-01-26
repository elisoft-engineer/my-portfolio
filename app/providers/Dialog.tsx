'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface DialogOptions {
  onClose?: (result?: any) => void;
}

interface DialogContextType {
  open: (node: ReactNode, opts?: DialogOptions) => void;
  close: (result?: any) => void;
  isOpen: boolean;
  content: ReactNode | null;
}

const DialogContext = createContext<DialogContextType | null>(null);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [options, setOptions] = useState<DialogOptions | null>(null);

  const open = useCallback((node: ReactNode, opts: DialogOptions = {}) => {
    setContent(() => node);
    setOptions(() => opts || null);
  }, []);

  const close = useCallback((result?: any) => {
    if (options?.onClose) {
      try { options.onClose(result); } catch (e) { /* swallow */ }
    }
    setContent(null);
    setOptions(null);
  }, [options]);

  const value = { open, close, isOpen: !!content, content };

  return (
    <DialogContext.Provider value={value}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("useDialog must be used within a DialogProvider");
  return ctx;
};