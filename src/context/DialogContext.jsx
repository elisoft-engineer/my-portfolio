import { createContext, useContext, useState, useCallback } from "react";

const DialogContext = createContext(null);

export const DialogProvider = ({ children }) => {
  // `content` is a React node to render inside the dialog
  // `options` can include { onClose }
  const [content, setContent] = useState(null);
  const [options, setOptions] = useState(null);
  const open = useCallback((node, opts = {}) => {
    setContent(() => node);
    setOptions(() => opts || null);
  }, []);
  const close = useCallback((result) => {
    // call onClose if provided
    if (options && typeof options.onClose === "function") {
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
  if (!ctx) throw new Error("useDialogContext must be used within a DialogProvider");
  return ctx;
};
