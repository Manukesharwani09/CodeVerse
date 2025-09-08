"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Highlight } from "prism-react-renderer";
import type { PrismTheme } from "prism-react-renderer";


interface CodeBlockProps {
  code: string;
  language: string;
}

const nightOwl: PrismTheme = {
  plain: {
    backgroundColor: "#011627",
    color: "#d6deeb",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "rgb(99, 119, 119)", fontStyle: "italic" },
    },
    {
      types: ["punctuation"],
      style: { color: "rgb(199, 146, 234)" },
    },
    {
      types: ["property", "tag", "boolean", "number", "constant", "symbol"],
      style: { color: "rgb(128, 203, 196)" },
    },
    {
      types: ["attr-name", "string", "char", "builtin", "inserted"],
      style: { color: "rgb(173, 219, 103)" },
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: { color: "rgb(212, 212, 212)" },
    },
    {
      types: ["function"],
      style: { color: "rgb(130, 170, 255)" },
    },
    {
      types: ["keyword"],
      style: { color: "rgb(127, 219, 202)" },
    },
  ],
};

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const lines = code.split("\n");
  const displayCode = isExpanded ? code : lines.slice(0, 6).join("\n");

  return (
    <div className="relative">
      <Highlight code={displayCode} language={language as string} theme={nightOwl}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} rounded-lg overflow-x-auto text-sm`}
            style={{
              ...style,
              padding: "1rem",
              borderRadius: "0.5rem",
              background: "rgba(0,0,0,0.4)",
              margin: 0,
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      {lines.length > 6 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute bottom-2 right-2 px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs flex items-center 
          gap-1 hover:bg-blue-500/30 transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="w-3 h-3" />
            </>
          ) : (
            <>
              Show More <ChevronDown className="w-3 h-3" />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default CodeBlock;
