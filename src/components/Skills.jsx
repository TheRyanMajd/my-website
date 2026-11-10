"use client";

import {
  FaAndroid,
  FaAws,
  FaClock,
  FaCloud,
  FaCloudUploadAlt,
  FaCode,
  FaCogs,
  FaDatabase,
  FaDesktop,
  FaDocker,
  FaDoorClosed as FaDoor,
  FaGithub,
  FaGoogle,
  FaJava,
  FaJs,
  FaLeaf,
  FaLightbulb,
  FaLinux,
  FaMobileAlt,
  FaNodeJs,
  FaPlane,
  FaProjectDiagram,
  FaPython,
  FaReact,
  FaRobot,
  FaRuler,
  FaStream,
  FaSyncAlt,
  FaTerminal,
  FaUnity,
  FaUsers,
} from "react-icons/fa";
import Reveal from "./Reveal";

const skillGroups = [
  {
    label: "Languages",
    columns: 2,
    skills: [
      { icon: FaJava, name: "Java" },
      { icon: FaJs, name: "JavaScript" },
      { icon: FaCode, name: "TypeScript" },
      { icon: FaPython, name: "Python" },
      { icon: FaTerminal, name: "Rust" },
      { icon: FaDatabase, name: "SQL" },
      { icon: FaTerminal, name: "C & C++" },
      { icon: FaCode, name: "C#" },
      { icon: FaAndroid, name: "Kotlin" },
      { icon: FaPlane, name: "Ada" },
    ],
  },
  {
    label: "Web & Backend",
    skills: [
      { icon: FaCode, name: "Web Development" },
      { icon: FaReact, name: "React & Next.js" },
      { icon: FaNodeJs, name: "Node.js & Express" },
      { icon: FaCode, name: "Tailwind CSS" },
      { icon: FaCogs, name: "RESTful APIs" },
    ],
  },
  {
    label: "Mobile & Libraries",
    skills: [
      { icon: FaMobileAlt, name: "React Native & Expo" },
      { icon: FaPython, name: "NumPy" },
      { icon: FaJava, name: "JavaFX" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { icon: FaAws, name: "AWS Cloud" },
      { icon: FaGoogle, name: "Google Cloud Platform" },
      { icon: FaCloudUploadAlt, name: "Cloud Run" },
      { icon: FaCloud, name: "Cloud Composer & Logging" },
      { icon: FaSyncAlt, name: "CI/CD Pipelines" },
      { icon: FaDocker, name: "Docker" },
    ],
  },
  {
    label: "Data",
    skills: [
      { icon: FaDatabase, name: "BigQuery" },
      { icon: FaLeaf, name: "MongoDB" },
      { icon: FaProjectDiagram, name: "Apache Airflow" },
      { icon: FaDoor, name: "IBM's DOORs" },
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
      { icon: FaLinux, name: "Unix & Linux" },
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
                <ul className={group.columns === 2 ? "grid grid-cols-2 gap-x-3 gap-y-3" : "space-y-3"}>
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
