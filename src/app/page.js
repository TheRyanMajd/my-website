'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import {
  FaClock, FaCloud, FaCloudUploadAlt, FaCode, FaCodeBranch, FaCogs, FaDatabase, FaDesktop, FaDocker, FaGithub, FaGlobe, FaGoogle, FaJava, FaJs, FaLeaf, FaLightbulb, FaProjectDiagram, FaPython, FaRobot, FaRuler, FaServer, FaStream, FaTerminal, FaUnity, FaUsers
} from 'react-icons/fa';
import { FaEnvelope, FaLinkedin, FaPhone, FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import vers from "../../package.json";
import pfp from "../../public/pfp1080.jpg";
import Projects from "./Projects";
import DotGrid from './components/DotGrid/DotGrid';

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
      once: false,
    });
  }, []);
  return null;
};

export default function Home() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const updateMobile = () => setMobile(window.innerWidth < 599);
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => window.removeEventListener('resize', updateMobile);
  }, []);

  // Remove auto-cycling logic

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1a1333] via-[#2d1e4f] to-[#3e2768] text-white">
      <AOSInit />
      {/* Header */}
      <header className="sticky top-0 z-30 w-full bg-black/40 backdrop-blur-md shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link className="flex items-center gap-2" href="#">
            <ComputerIcon className="h-7 w-7 text-purple-400" />
            <span className="font-bold text-lg tracking-tight hidden sm:inline">Ryan Majd</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#contact" label="Contact" />
            <NavLink href="#resume" label="Resume" />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 relative">
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <DotGrid
            dotSize={4}
            gap={15}
            baseColor="#5f43b2"
            activeColor="#ffffff2c"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 md:py-24 px-4 max-w-6xl mx-auto">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              <TypeAnimation
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
                sequence={[
                  'Ryan Majd', 2000,
                  'Software Engineer', 1500,
                  'CTO, TravelByte', 1500,
                  'KTP President', 1500,
                  'GitHub Expert', 1500,
                  'UGAHacks Lead', 1500,
                  'Community Builder', 1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-lg text-gray-200 max-w-xl">
              I&apos;m a Computer Science and Applied Math student at the&nbsp;
              <Link className="text-red-400 font-semibold hover:underline" target="_blank" href="https://www.uga.edu/">University of Georgia</Link>, passionate about building impactful software, leadership, and advancing technology for good. Currently, I&apos;m the founding President of&nbsp;
              <Link className="text-blue-400 font-semibold hover:underline" target="_blank" href="https://www.ktpgeorgia.com/">KTP: Phi Chapter</Link>, <Link className="text-red-500 font-semibold hover:underline" target="_blank" href="https://www.macys.com">Macy&apos;s Tech</Link> SWE intern, Tech director for <Link className="text-purple-400 font-semibold hover:underline" target="_blank" href="https://ugahacks.com">UGAHacks</Link>, and <Link className="text-pink-400 font-semibold hover:underline" target="_blank" href="https://githubcampus.expert/TheRyanMajd/">GitHub Campus Expert</Link>!
            </p>
            <div className="flex flex-wrap gap-3">
              <ActionLink href="https://github.com/TheRyanMajd/" color="bg-black hover:bg-gray-800" label={mobile ? 'GitHub' : 'Add me on GitHub'} />
              <ActionLink href="https://www.linkedin.com/in/ryan-majd/" color="bg-[#0072b1] hover:bg-[#005580]" label={mobile ? 'LinkedIn' : 'Connect with me on LinkedIn'} />
              <ActionLink href="/#resume" color="bg-purple-600 hover:bg-purple-800" label="Resume" />
            </div>
            <span className="text-sm text-green-400">v{vers.version} — Actively seeking entry level SWE roles</span>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4" data-aos="fade-left">
            <Image
              alt="Ryan Majd"
              className="rounded-full shadow-2xl border-4 border-purple-400"
              src={pfp}
              width={240}
              height={240}
              style={{ objectFit: 'cover' }}
              priority
            />
            <h2 className="text-2xl font-semibold mt-2">Welcome to My Website!</h2>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent" data-aos="flip-up">Projects</h2>
          <Projects />
        </section>

        {/* Skills Section with Infinite Horizontal Scroll (Marquee) */}
        <section id="skills" className="py-12 md:py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent" data-aos="flip-up">My Skills</h2>
          <p className="text-base italic text-gray-300 text-center mb-8" data-aos="fade-right">Always learning, always leveling up 🚀</p>
          <div className="overflow-hidden w-full">
            {/* Row 1 */}
            <div className="relative w-full flex flex-nowrap whitespace-nowrap mb-4 group" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
              <div className="flex animate-marquee gap-6">
                {skillsList.concat(skillsList).map(({ icon: Icon, label }, i) => (
                  <div key={label + '-row1-' + i} className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-4 shadow min-w-[120px] mx-2">
                    <Icon className="h-7 w-7 mb-2 text-white" />
                    <span className="text-sm font-medium text-center max-w-[120px] min-w-[80px] truncate whitespace-nowrap block">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Row 2 (offset) */}
            <div className="relative w-full flex flex-nowrap whitespace-nowrap group" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
              <div className="flex animate-marquee2 gap-6">
                {(() => {
                  const half = Math.floor(skillsList.length / 2);
                  const offsetSkills = skillsList.slice(half).concat(skillsList.slice(0, half));
                  return offsetSkills.concat(offsetSkills).map(({ icon: Icon, label }, i) => (
                    <div key={label + '-row2-' + i} className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-4 shadow min-w-[120px] mx-2">
                      <Icon className="h-7 w-7 mb-2 text-white" />
                      <span className="text-sm font-medium text-center max-w-[120px] min-w-[80px] truncate whitespace-nowrap block">{label}</span>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent" data-aos="flip-up">Contact Me</h2>
          <ul className="flex flex-wrap justify-center gap-8">
            {contactLinks.map(({ href, icon: Icon, label }, i) => (
              <li key={label} className="flex flex-col items-center gap-2 hover:scale-110 transition-transform" data-aos="fade-up" data-aos-delay={i * 60}>
                <Link href={href} target="_blank" className="text-white text-2xl p-3 rounded-full bg-purple-700/60 hover:bg-purple-500/80 shadow-lg">
                  <Icon className="h-7 w-7" />
                </Link>
                <span className="text-sm font-medium mt-1">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-12 md:py-20 px-4 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">My Resume</h2>
            <p className="text-lg text-gray-200 mb-6">Take a look at my professional experience and qualifications.</p>
            <div className="flex justify-center">
              <Link
                href="https://docs.google.com/document/d/12og3HniuDy5Nqm0LpAfb5dOaV5B-k4jn/edit?usp=sharing&ouid=102048050812793693879&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out anim-border"
              >
                <Book className="w-5 h-5 mr-2" />
                {mobile ? 'Google Doc' : 'View on Google Docs'}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-gray-700 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-2">
          <p className="text-xs text-gray-400">© Ryan Majd. All rights reserved.</p>
          <nav className="flex gap-4">
            <FooterLink href="https://www.linkedin.com/in/ryan-majd/" label="LinkedIn" />
            <FooterLink href="https://github.com/TheRyanMajd/" label="GitHub" />
            <FooterLink href="mailto:ryan.majd@uga.edu" label="Email" />
          </nav>
        </div>
      </footer>
    </div>
  );
}

// --- Helper Components ---
function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-300 transition-all hover:font-bold underline-offset-4 hover:text-purple-400 hover:underline px-2 py-1 rounded"
    >
      {label}
    </Link>
  );
}

function ActionLink({ href, color, label }) {
  return (
    <Link
      className={`inline-flex h-9 items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 anim-border ${color}`}
      target="_blank"
      href={href}
    >
      {label}
    </Link>
  );
}

function FooterLink({ href, label }) {
  return (
    <Link
      className="text-xs hover:underline underline-offset-4 text-gray-300 hover:animate-pulse"
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
    >
      {label}
    </Link>
  );
}

// --- Data ---
const skillsList = [
  { icon: FaJava, label: 'Java' },
  { icon: FaJs, label: 'JavaScript' },
  { icon: FaPython, label: 'Python' },
  { icon: FaTerminal, label: 'C & C++' },
  { icon: FaCode, label: 'Web Development' },
  { icon: FaGlobe, label: 'Next.js & React' },
  { icon: FaServer, label: 'Node.js & Express' },
  { icon: FaCogs, label: 'RESTful APIs' },
  { icon: FaCloud, label: 'AWS Cloud' },
  { icon: FaGoogle, label: 'Google Cloud Platform' },
  { icon: FaCloudUploadAlt, label: 'Cloud Run' },
  { icon: FaDocker, label: 'Docker' },
  { icon: FaDatabase, label: 'BigQuery' },
  { icon: FaLeaf, label: 'MongoDB' },
  { icon: FaGithub, label: 'Git/GitHub/GitLab' },
  { icon: FaProjectDiagram, label: 'DrawIO & Diagrams' },
  { icon: FaRobot, label: 'AI & Machine Learning' },
  { icon: FaUnity, label: 'Unity 3D' },
  { icon: FaStream, label: 'Algorithms & Data Structures' },
  { icon: FaDesktop, label: 'Operating Systems' },
  { icon: FaCodeBranch, label: 'Unix & Linux' },
  { icon: FaRuler, label: 'Leadership' },
  { icon: FaUsers, label: 'Teamwork' },
  { icon: FaLightbulb, label: 'Creativity' },
  { icon: FaClock, label: 'Time Management' },
];

const contactLinks = [
  { href: 'https://www.linkedin.com/in/ryan-majd/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/TheRyanMajd/', icon: FaGithub, label: 'GitHub' },
  { href: 'https://x.com/theryanmajd', icon: FaXTwitter, label: '𝕏' },
  { href: 'mailto:ryan.majd@uga.edu', icon: FaEnvelope, label: 'Email' },
];

// --- SVG Icon Components (ComputerIcon, Book, etc.) remain unchanged below ---
function Book(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="5" width="16" height="14" rx="2" ry="2" />
      <line x1="4" y1="5" x2="20" y2="5" />
      <line x1="12" y1="5" x2="12" y2="19" />
    </svg>
  );
}

function PageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}


function LightbulbIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>)
  );
}
function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}
function GroupIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}

function UnityLogoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <circle cx={8} cy={16} r="3" />
      
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function AppleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}

function ComputerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>)
  );
}


function BeanIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" />
      <path d="M5.341 10.62a4 4 0 1 0 5.279-5.28" />
    </svg>)
  );
}


function CodepenIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>)
  );
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function GameJoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
        <path d="M13 2 L9 13 L15 13 L11 22" />
    </svg>
  );
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function RulerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  )
}




function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="1"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
     <image href="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png" width="24" height="24" stroke = "white" />
 
    </svg>
  )
}

// ReactDOM.render(<App />, document.getElementById('root'));
// 