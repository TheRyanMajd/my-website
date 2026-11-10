"use client";

import Image from "next/image";
import { useRef } from "react";
import { FileCode2, FileText } from "lucide-react";

function highlightLine(line) {
  const tokens = line.split(/(\\[a-zA-Z@]+|\\.|%.*|[{}[\]]|\$[^$]*\$)/g);

  return tokens.map((token, index) => {
    let className;
    if (token.startsWith("\\")) className = "resume-code-command";
    else if (token.startsWith("%")) className = "resume-code-comment";
    else if (token.startsWith("$")) className = "resume-code-math";
    else if (/^[{}[\]]$/.test(token)) className = "resume-code-bracket";

    return className ? (
      <span className={className} key={index}>{token}</span>
    ) : token;
  });
}

export default function ResumePanels({ source }) {
  const sourceRef = useRef(null);
  const previewRef = useRef(null);
  const expectedScroll = useRef(new WeakMap());
  const lines = source.replace(/\n$/, "").split("\n");

  function syncScroll(event, targetRef) {
    const current = event.currentTarget;
    const expected = expectedScroll.current.get(current);
    expectedScroll.current.delete(current);
    if (expected !== undefined && Math.abs(current.scrollTop - expected) < 1) return;

    const target = targetRef.current;
    const currentRange = current.scrollHeight - current.clientHeight;
    const targetRange = target.scrollHeight - target.clientHeight;
    if (currentRange <= 0 || targetRange <= 0) return;

    const next = Math.max(0, Math.min(1, current.scrollTop / currentRange)) * targetRange;
    if (Math.abs(target.scrollTop - next) < 1) return;
    expectedScroll.current.set(target, next);
    target.scrollTop = next;
  }

  return (
    <div className="resume-panels">
      <div className="resume-source-panel">
        <div className="resume-panel-header resume-source-header">
          <span><FileCode2 size={16} aria-hidden="true" /> resume.tex</span>
          <span className="resume-readonly">READ ONLY</span>
        </div>
        <div ref={sourceRef} onScroll={(event) => syncScroll(event, previewRef)} className="resume-code-scroll" tabIndex={0} role="region" aria-label="LaTeX resume source">
          <pre className="resume-code"><code>{lines.map((line, index) => (
            <span className="resume-code-line" key={index}>
              <span className="resume-line-number" aria-hidden="true">{index + 1}</span>
              <span>{highlightLine(line) || " "}</span>
            </span>
          ))}</code></pre>
        </div>
      </div>

      <div className="resume-preview-panel">
        <div className="resume-panel-header">
          <span><FileText size={16} aria-hidden="true" /> resume.pdf</span>
          <span className="resume-preview-label"><span aria-hidden="true" /> PDF PREVIEW</span>
        </div>
        <div ref={previewRef} onScroll={(event) => syncScroll(event, sourceRef)} className="resume-preview" tabIndex={0} role="region" aria-label="Resume PDF preview">
          <Image
            src="/resume-preview.png"
            width={1275}
            height={1650}
            alt="Preview of Ryan Majd's resume. Open the PDF for selectable text."
          />
        </div>
        <p className="resume-fallback">For selectable text, <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">open the PDF in a new tab.</a></p>
      </div>
    </div>
  );
}
