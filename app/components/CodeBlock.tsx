"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({
  code,
  language = "javascript",
}: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!mounted) {
    return (
      <pre
        style={{
          padding: "1.5rem",
          fontSize: "0.9rem",
          background: "#0d1117",
          color: "#fff",
          borderRadius: "8px",
        }}
      >
        <code>{code}</code>
      </pre>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "0.75rem",
          right: "0.75rem",
          zIndex: 10,
          padding: "0.5rem",
          borderRadius: "6px",
          background: "#ffffff0d",
          border: `1px solid #ffffff1a`,
          cursor: "pointer",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s",
        }}
        title="Copy code"
      >
        {copied ? <Check size={14} color="#27c93f" /> : <Copy size={14} />}
      </button>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1.5rem",
          fontSize: "0.875rem",
          borderRadius: "8px",
          background: "#1e1e1e",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
          overflowX: "hidden",
        }}
        codeTagProps={{
          style: {
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
