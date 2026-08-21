"use client";

import {
  FaClock,
  FaCloud,
  FaCloudUploadAlt,
  FaCode,
  FaCodeBranch,
  FaCogs,
  FaDatabase,
  FaDesktop,
  FaDocker,
  FaGithub,
  FaGlobe,
  FaGoogle,
  FaJava,
  FaJs,
  FaLeaf,
  FaLightbulb,
  FaProjectDiagram,
  FaPython,
  FaRobot,
  FaRuler,
  FaServer,
  FaStream,
  FaTerminal,
  FaUnity,
  FaUsers,
} from "react-icons/fa";
import Reveal from "./Reveal";

const skillGroups = [
  {
    label: "Languages",
    skills: [
      { icon: FaJava, name: "Java" },
      { icon: FaJs, name: "JavaScript" },
      { icon: FaPython, name: "Python" },
      { icon: FaTerminal, name: "C & C++" },
    ],
  },
  {
    label: "Web & Backend",
    skills: [
      { icon: FaCode, name: "Web Development" },
      { icon: FaGlobe, name: "Next.js & React" },
      { icon: FaServer, name: "Node.js & Express" },
      { icon: FaCogs, name: "RESTful APIs" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { icon: FaCloud, name: "AWS Cloud" },
      { icon: FaGoogle, name: "Google Cloud Platform" },
      { icon: FaCloudUploadAlt, name: "Cloud Run" },
      { icon: FaDocker, name: "Docker" },
    ],
  },
  {
    label: "Data",
    skills: [
      { icon: FaDatabase, name: "BigQuery" },
      { icon: FaLeaf, name: "MongoDB" },
    ],
  },
  {
    label: "Tools & Collaboration",
    skills: [
      { icon: FaGithub, name: "Git / GitHub / GitLab" },
      { icon: FaProjectDiagram, name: "DrawIO & Diagrams" },
    ],
  },
  {
    label: "Specialties",
    skills: [
      { icon: FaRobot, name: "AI & Machine Learning" },
      { icon: FaUnity, name: "Unity 3D" },
      { icon: FaStream, name: "Algorithms & Data Structures" },
      { icon: FaDesktop, name: "Operating Systems" },
      { icon: FaCodeBranch, name: "Unix & Linux" },
    ],
  },
  {
    label: "Leadership",
    skills: [
      { icon: FaRuler, name: "Leadership" },
      { icon: FaUsers, name: "Teamwork" },
      { icon: FaLightbulb, name: "Creativity" },
      { icon: FaClock, name: "Time Management" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="headline mb-3">Skills</h2>
            <p className="body-lg text-[var(--muted)]">
              Always learning, always leveling up
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 60}>
              <div className="material-thick h-full rounded-[var(--radius-lg)] p-5">
                <h3 className="caption mb-4 font-semibold uppercase tracking-wider">
                  {group.label}
                </h3>
                <ul className="space-y-3">
                  {group.skills.map(({ icon: Icon, name }) => (
                    <li
                      key={name}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[var(--muted)]" />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
