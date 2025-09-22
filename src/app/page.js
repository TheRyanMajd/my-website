'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import {
  FaClock,
  FaCloud, // docker
  FaCloudUploadAlt,
  FaCode,
  FaCodeBranch,
  FaCogs,
  FaDatabase,
  FaDesktop, // python
  FaDocker,
  FaGithub,
  FaGlobe, // cloud-run
  FaGoogle,
  // --- existing icons you already had ---
  FaJava,
  FaJs, // gcp
  FaLeaf,
  FaLightbulb, // mongodb leaf
  FaProjectDiagram,
  // --- NEW icons ---
  FaPython,
  FaRobot,
  FaRuler,
  FaServer, // drawio / architecture diagrams
  FaStream, // algorithms & DS
  FaTerminal,
  FaUnity,
  FaUsers
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
   // Initialize mobile state as false
   const [mobile, setMobile] = useState(false);

   useEffect(() => {
     // Update the mobile state based on window width
     const updateMobile = () => setMobile(window.innerWidth < 599);
 
     // Call once to set initial state based on current window width
     updateMobile();
 
     // Setup event listener for resizing the window
     window.addEventListener('resize', updateMobile);
 
     // Cleanup the event listener when the component unmounts
     return () => window.removeEventListener('resize', updateMobile);
   }, []);
  return (
    (<div key="1" className="flex flex-col min-h-[100dvh]">
    <AOSInit />
      <header className="px-4 lg:px-6 h-14 flex items-center backdrop-blur-sm">
        <Link className="flex items-center justify-center" href="#">
          <ComputerIcon className="h-6 w-6 text-white rounded-md items-center justify-center flex hover:animate-pulse" />
          <span className="sr-only">CS Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-gray-300 transition-all hover:font-bold underline-offset-4 hover:animate-bounce"
            href="#projects"> 
            Projects
          </Link>
          <Link
            className="text-sm font-medium text-gray-300 transition-all hover:font-bold underline-offset-4 hover:animate-spin"
            href="#skills">
            Skills
          </Link>
          <Link
            className="text-sm font-medium text-gray-300 transition-all hover:font-bold underline-offset-4 hover:animate-ping"
            href="#contact">
            Contact
          </Link>
          <Link
            className="text-sm font-medium text-gray-300 transition-all hover:font-bold underline-offset-4 hover:animate-pulse"
            href="#resume">
            Resume
          </Link>
        </nav>

      </header>
      <main className="flex-1 relative overflow-hidden">
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
  <section className="align-center w-full py-4 md:py-8 lg:py-16">
<div className="bg-purple-900/30 backdrop-blur-sm  rounded-xl p-6 shadow-lg">
  <div className="mx-auto container space-y-12 px-4 md:px-6 xl:space-y-16">
    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
      <div className="px-auto text-center md:text-left col-span-1" data-aos="fade-up" data-aos-duration="400">
        <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          <TypeAnimation
            className="sm:text-2xl md:text-3xl xl:text-[3.2rem] 2xl:text-[3.5rem]"
            sequence={[
  'Ryan Majd',       2000,
  'Software Engineer',1500,
  'CTO, TravelByte', 1500,
  'KTP President',   1500,
  'GitHub Expert',   1500,
  'UGAHacks Lead',   1500,
  'Community Builder',1500,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'block', color: '#EF5350' }}
            repeat={Infinity}
          />
        </h1>
        <p className="mx-auto my-4 max-w-[700px] text-gray-400 md:text-xl mb-4">
          I&apos;m a Computer Science and Applied Math student at the&nbsp;
          <Link
            className="text-sm font-medium text-red-600 md:text-xl my-4 transition-all hover:font-bold underline-offset-4"
            target="_blank"
            href="https://www.uga.edu/"
          >
            University of Georgia
          </Link>
          , passionate about building impactful software, leadership, and advancing technology for good. Currently, I&apos;m the founding President of&nbsp;
          <Link
            className="text-sm font-medium text-blue-400 md:text-xl my-4 transition-all hover:font-bold underline-offset-4"
            target="_blank"
            href="https://www.ktpgeorgia.com/"
          >
            KTP: Phi Chapter
          </Link>
          , <Link
            className="text-sm font-medium text-red-500 md:text-xl my-4 transition-all hover:font-bold underline-offset-4"
            target="_blank"
            href="https://www.macys.com"
          >
            Macy&apos;s Tech
          </Link> 
          &nbsp;SWE intern, Tech director for <Link
            className="text-sm font-medium text-purple-900 md:text-xl my-4 transition-all hover:font-bold underline-offset-4"
            target="_blank"
            href="https://ugahacks.com"
          >
            UGAHacks
          </Link>, and <Link
            className="text-sm font-medium text-red-400 md:text-xl my-4 transition-all hover:font-bold underline-offset-4"
            target="_blank"
            href="https://githubcampus.expert/TheRyanMajd/"
          >
            GitHub Campus Expert
          </Link>!<br />
        </p>

        <div className="space-x-4 mb-4 flex flex-wrap gap-2">
          <Link
            className="inline-flex h-9 items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 anim-border"
            target="_blank"
            href="https://github.com/TheRyanMajd/"
          >
            {mobile ? 'GitHub' : 'Add me on GitHub'}
          </Link>
          <Link
            className="inline-flex h-9 items-center rounded-md bg-[#0072b1] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#005580] anim-border"
            target="_blank"
            href="https://www.linkedin.com/in/ryan-majd/"
          >
            {mobile ? 'LinkedIn' : 'Connect with me on LinkedIn'}
          </Link>
          <Link
            className="inline-flex h-9 items-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-800 anim-border"
            href="/#resume"
            rel="noopener"
          >
            Resume
          </Link>
        </div>
        <div className="my-2 text-gray-400 md:text-base mb-2">
          {/* Example version badge */}
          <span>v{vers.version} — <span className="text-green-400">Actively seeking entry level SWE roles</span></span>
        </div>
      </div>
      <div className="mx-auto text-center md:text-right col-span-1" data-aos="fade-right" data-aos-duration="400">
        <h1 className="lg:leading-tighter text-2xl font-semibold tracking-tighter sm:text-3xl md:text-4xl xl:text-[2.2rem] 2xl:text-[2.75rem] mb-2">
          Welcome to My Website!
        </h1>
        <Image
          alt="Ryan Majd"
          className="mx-auto my-4 rounded-lg shadow-xl transition-all hover:scale-100"
          src={pfp}
          style={{
            objectFit: 'cover',
            width: '100%',
            maxWidth: '300px',
            height: 'auto',
          }}
        />
        {/* <div className="flex justify-center md:justify-end gap-2 mt-4">
          <Link
            href="https://www.ktpgeorgia.com/"
            target="_blank"
            className="text-xs px-3 py-1 bg-blue-500/80 rounded-md font-semibold text-white shadow hover:bg-blue-700"
          >
            KTP at UGA
          </Link>
          <Link
            href="https://githubcampus.expert/TheRyanMajd/"
            target="_blank"
            className="text-xs px-3 py-1 bg-pink-500/80 rounded-md font-semibold text-white shadow hover:bg-pink-700"
          >
            GitHub Campus Expert
          </Link>
        </div> */}
      </div>
    </div>
  </div>
  </div>

</section>


<section id= "projects">
<Projects />
</section>
        <section id = "skills" className="w-full py-2 md:py-4 lg:py-8 dottedREP bg-purple-900/30 backdrop-blur-sm">
          <div 
            className="mx-auto container grid items-center justify-center gap-4 px-4 text-center md:px-6 py-8" >
            <div className="space-y-3">
              <h2 className="text-3xl space-y-4 font-bold tracking-tighter sm:text-4xl md:text-5xl" data-aos='flip-up' data-aos-duration='400'>My Skills</h2>
             <p
    className="text-base italic text-gray-300"
    data-aos="fade-right"
    data-aos-delay="200"
  >
    Always learning, always leveling up 🚀
  </p>
            </div>
            <div
              className=" mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:max-w-5xl items-start" data-aos='fade-up' data-aos-duration='600'>
             {/* ---------------- LANGUAGES ---------------- */}
<div className="flex flex-col items-center justify-center">
  <FaJava  className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Java</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaJs className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">JavaScript</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaPython className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Python</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaTerminal className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">C & C++</span>
</div>

{/* ------------ WEB / BACKEND --------------- */}
<div className="flex flex-col items-center justify-center">
  <FaCode className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Web Development</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaGlobe className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Next.js & React</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaServer className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Node.js & Express</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaCogs className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">RESTful APIs</span>
</div>

{/* ------------- CLOUD / DEVOPS ------------- */}
<div className="flex flex-col items-center justify-center">
  <FaCloud className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">AWS Cloud</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaGoogle className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Google Cloud Platform</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaCloudUploadAlt className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Cloud Run</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaDocker className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Docker</span>
</div>

{/* ----------------- DATA ------------------- */}
<div className="flex flex-col items-center justify-center">
  <FaDatabase className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">BigQuery</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaLeaf className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">MongoDB</span>
</div>

{/* ------- COLLABORATION & TOOLING -------- */}
<div className="flex flex-col items-center justify-center">
  <FaGithub className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Git/GitHub/GitLab</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaProjectDiagram className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">DrawIO & Diagrams</span>
</div>

{/* ---------- SPECIALTIES & OTHER ---------- */}
<div className="flex flex-col items-center justify-center">
  <FaRobot className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">AI & Machine Learning</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaUnity className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Unity 3D</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaStream className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Algorithms & Data Structures</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaDesktop className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Operating Systems</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaCodeBranch className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Unix & Linux</span>
</div>

{/* -------------- SOFT SKILLS -------------- */}
<div className="flex flex-col items-center justify-center">
  <FaRuler className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Leadership</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaUsers className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Teamwork</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaLightbulb className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Creativity</span>
</div>
<div className="flex flex-col items-center justify-center">
  <FaClock className="h-6 w-6 mb-2 text-white" />
  <span className="text-sm font-medium">Time Management</span>
</div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-black-700 w-full">
  <div className="container mx-auto text-center px-4 md:px-6 py-8">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" data-aos='flip-up' data-aos-duration='400'>Contact Me</h2>
    <div className="mt-8">
      <ul className="flex space-x-8 animate-slide justify-center overflow-hidden h-12">
        
        <Link className="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="https://www.linkedin.com/in/ryan-majd/">
          <li className="flex flex-col items-center justify-center" data-aos='fade-left' data-aos-duration='400'>
            <FaLinkedin className="h-6 w-6 mb-2 text-white" />
            LinkedIn
          </li>
        </Link>

        <Link className="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="https://github.com/TheRyanMajd/">
          <li className="flex flex-col items-center justify-center" data-aos='fade-left' data-aos-duration='300'>
            <FaGithub className="h-6 w-6 mb-2 text-white" />
            GitHub
          </li>
        </Link>

        <Link className="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="https://x.com/theryanmajd">
          <li className="flex flex-col items-center justify-center">
            <FaXTwitter className="h-6 w-6 mb-2 text-white" />
            𝕏
          </li>
        </Link>

        <Link className="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="tel:+16786771014">
          <li className="flex flex-col items-center justify-center" data-aos='fade-right' data-aos-duration='300'>
            <FaPhone className="h-6 w-6 mb-2 text-white" />
            <span className="text-sm font-medium">(678) 677-1014</span>
          </li>
        </Link>

        <Link className="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="mailto:ryan.majd@uga.edu">
          <li className="flex flex-col items-center justify-center" data-aos='fade-right' data-aos-duration='400'>
            <FaEnvelope className="h-6 w-6 mb-2 text-white" />
            Email
          </li>
        </Link>

      </ul>
    </div>
  </div>
</section>
<section className="w-full py-8 md:py-12 lg:py-16 bg-purple-900/30 backdrop-blur-sm">
  <div id="resume" className="container mx-auto px-4 md:px-6">
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
        My Resume
      </h2>
      <p className="text-xl text-gray-400">
        Take a look at my professional experience and qualifications.
      </p>
      <div className="flex justify-center space-x-4">
      <Link
          href="https://docs.google.com/document/d/12og3HniuDy5Nqm0LpAfb5dOaV5B-k4jn/edit?usp=sharing&ouid=102048050812793693879&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out anim-border"
        >
          <Book className="w-5 h-5 mr-2" />
          {mobile ? 'Google Doc' : 'View on Google Docs'}
        </Link>
        {/* <Link
          href="https://drive.google.com/file/d/1DIbBT_PiEui-N5XDp05OYOiLYrCSmx0V/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base hover:animate-pulse font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out"
        >
          <PageIcon className="w-5 h-5 mr-2" />
          {mobile ? 'PDF' : 'View as PDF'}
        </Link> */}
      </div>
      {/* <div className="relative overflow-hidden rounded-lg shadow-xl bg-white p-2 hide-on-mobile">
        <div className="absolute inset-0 bg-gradient bg-black  animate-gradient-x"></div>
        <iframe lazy="true"
          title="Resume"
          className="relative w-full h-full aspect-[8.5/14] md:aspect-[9/9] rounded-md"
          src="https://docs.google.com/document/d/12og3HniuDy5Nqm0LpAfb5dOaV5B-k4jn/edit?usp=sharing&ouid=102048050812793693879&rtpof=true&sd=true"
          style={{ minHeight: '500px', maxWidth: '1600px'}}
        />
      </div> */}
      
    </div>
  </div>
</section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">© Ryan Majd. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-300 hover:animate-pulse"
            href="https://www.linkedin.com/in/ryan-majd/">
            LinkedIn
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-300 hover:animate-pulse"
            href="https://github.com/TheRyanMajd/">
            GitHub
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-300 hover:animate-pulse"
            href="mailto:ryan.majd@uga.edu">
            Email
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

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