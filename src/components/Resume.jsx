import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import ResumePanels from "./ResumePanels";

export default function Resume() {
  const source = readFileSync(join(process.cwd(), "public", "resume.tex"), "utf8");
  return (
    <section className="section">
      <div id="resume" className="section-inner">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className="headline mb-3">Resume</h2>
            <p className="body-lg text-[var(--muted)]">
              A little behind the scenes: from LaTeX source to the finished page.
            </p>
          </div>

          <div className="resume-workspace material-thick">
            <div className="resume-workspace-header">
              <div>
                <p className="resume-eyebrow">THE MAKING OF A RESUME</p>
                <p className="resume-workspace-title">Source to paper<span className="resume-cursor" aria-hidden="true">_</span></p>
              </div>
              <div className="resume-actions">
                {/* <a className="resume-action" href="https://docs.google.com/document/d/12og3HniuDy5Nqm0LpAfb5dOaV5B-k4jn/edit?usp=sharing&ouid=102048050812793693879&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                  Google Docs <ArrowUpRight size={15} aria-hidden="true" />
                </a> */}
                <a className="resume-action" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Open PDF <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a className="resume-download" href="/resume.pdf" download>
                  <ArrowDownToLine size={16} aria-hidden="true" /> Download
                </a>
              </div>
            </div>

            <ResumePanels source={source} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
