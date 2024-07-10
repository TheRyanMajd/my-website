import Image from "next/image";
import Link from "next/link";
import vers from "../../package.json";
import pfp from "../../public/bruhpfp.jpg";
import Projects from "./Projects";
export default function Home() {
  return (
    (<div key="1" className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        {/* <button
          aria-label="Toggle light mode"
          className="h-6 w-4 mr-4 bg-gray-700 hover:bg-gray-600 rounded-md">
          <LightbulbIcon className="h-4 w-4 text-white" />
        </button> */}
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
      <main className="flex-1"> 
      <section className="align-center w-full py-4 md:py-8 lg:py-16 dotted">
  <div className="mx-auto container space-y-12 px-4 md:px-6 space-y-10 xl:space-y-16">
    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
      <div className="px-auto text-center md:text-left col-span-1">
        <h1
          className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          Ryan Majd&apos;s Portfolio
        </h1>
        <p className="mx-auto my-4 max-w-[700px] text-gray-400 md:text-xl mb-4">
        Ryan Majd, a tech-savvy CS student at the&nbsp; 
        <Link
            className="text-sm font-medium text-red-400 md:text-xl my-4 transition-all hover:font-bold underline-offset-4"
            target="_blank"
            href="https://www.uga.edu/">
            University of Georgia
          </Link>, specializes in website development, GitHub, and Java. Proficient in navigating Unix systems and creating Unity worlds, my journey merges code, creativity, and a passion for pushing technological boundaries. 🚀
        </p>
        <div className="space-x-4 mb-4">
          <Link
            className="inline-flex mx-auto h-9 items-center hover:animate-bounce justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
            target="_blank"
            href="https://github.com/TheRyanMajd/">    
            Check out my Github
          </Link>
          <Link
            className="inline-flex mx-auto h-9 items-center hover:animate-bounce justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
            target="_blank"
            href="https://www.linkedin.com/in/ryan-majd/">    
            Connect on LinkedIn
          </Link>
          <p className="my-2 text-gray-400 md:text-xl mb-2">Version: {vers.version}</p>
        </div>
      </div>
      <div className="mx-auto text-center md:text-right col-span-1"> 
      <h1
          className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          Glad You&apos;re Here!
        </h1>
        <Image
      alt="Image of Me"
      className="mx-auto my-4 rounded-lg shadow-xl transition-all hover:shadow-2xl"
      src={pfp}
      style={{
        objectFit: "cover",
        width: "100%", /* Responsive width */
        maxWidth: "300px", /* Max width */
        height: "auto" /* Maintain aspect ratio */
      }}
    />
        </div>
    </div>
  </div>
</section>

<section section id= "projects">
<Projects  />
</section>
        <section section id = "skills" className="w-full py-2 md:py-4 lg:py-8 dotted">
          <div 
            className="mx-auto container grid items-center justify-center gap-4 px-4 text-center md:px-6 py-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            </div>
            <div
              className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-6 lg:max-w-5xl lg:grid-cols-5">
              <div className="flex flex-col items-center justify-center">
                <BeanIcon className="h-6 w-6 mb-2 text-white" />
                <span className="text-sm font-medium">Java</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <CodepenIcon className="h-6 w-6 mb-2 text-white" />
                <span className="text-sm font-medium">Web Dev</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <GithubIcon className="h-6 w-6 mb-2 text-white" />
                <span className="text-sm font-medium">Github & Version Control</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <AppleIcon className="h-6 w-6 mb-2 text-white" />
                <span className="text-sm font-medium">Artifical Intelligence & Machine Learning</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <UnityLogoIcon className="h-6 w-6 mb-2 text-white" />
                <span className="text-sm font-medium">Unity3D</span>
              </div>
              <div className="flex flex-col items-center justify-center">
              <RulerIcon className="h-6 w-6 mb-2 text-white" />
                <span className="text-sm font-medium">Leadership</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <LightbulbIcon className="h-6 w-6 mb-2 text-white" />
                <span className="text-sm font-medium">Creativity</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <GroupIcon className="h-6 w-6 mb-2 text-white" />
                <span className="text-sm font-medium">Teamwork</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <MessageCircleIcon className="h-6 w-6 mb-2 text-white" />
                <span className="text-sm font-medium">Communication</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ClockIcon className="h-6 w-6 mb-2 text-white" />
                <span className="text-sm font-medium">Time Management</span>
              </div>
            </div>
          </div>
        </section>

<section id="contact" class="bg-black-700 w-full">
  <div class="container mx-auto text-center px-4 md:px-6 py-8">
    <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
    <div class="mt-8">
      <ul class="flex space-x-8 animate-slide  justify-center overflow-hidden h-12">
        <Link className="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="https://www.linkedin.com/in/ryan-majd/">
        <li class="flex flex-col items-center justify-center">
          <LinkedinIcon class="h-6 w-6 mb-2 text-white" /> LinkedIn
        </li>
        </Link>
        <Link class="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="https://github.com/TheRyanMajd/">
        <li class="flex flex-col items-center justify-center">
          <GithubIcon class="h-6 w-6 mb-2 text-white" /> GitHub
        </li>
        </Link>
        <Link class="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="https://x.com/theryanmajd">
        <li class=" flex flex-col items-center justify-center">
          <TwitterIcon class="h-6 w-6 mb-2 text-white" />
          𝕏
        </li>
        </Link>
        
        <Link class="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="tel:+16786771014">
        <li class=" flex flex-col items-center justify-center">
          <PhoneIcon class="h-6 w-6 mb-2 text-white" />
          <span class="text-sm font-medium">(678) 677-1014</span>
        </li>
        </Link>
        <Link class="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="mailto:ryan.majd@uga.edu">
        <li class=" flex flex-col items-center justify-center">
          <MailIcon class="h-6 w-6 mb-2 text-white" />
        </li>
        Email</Link>
        {/* <Link className="text-sm font-medium hover:font-bold underline-offset-4 text-gray-300 hover:animate-pulse" target="_blank" href="https://gamejolt.com/@CimexGames">  
        <li class=" flex flex-col items-center justify-center">
          <GameJoltIcon class="h-6 w-6 mb-2 text-white" />
          GameJolt
        </li>
        </Link> */}
      </ul>
    </div>
  </div>
</section>
<section className="w-full py-8 md:py-12 lg:py-16 dotted">
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
          className="inline-flex items-center px-6 py-3 border border-transparent text-base hover:animate-pulse font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out"
        >
          <Book className="w-5 h-5 mr-2" />
          View on Google Docs
        </Link>
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-xl bg-white p-2">
        <div className="absolute inset-0 bg-gradient bg-black  animate-gradient-x"></div>
        <iframe lazy
          title="Resume"
          className="relative w-full h-full aspect-[4/3] md:aspect-[16/9] rounded-md"
          src="https://docs.google.com/document/d/12og3HniuDy5Nqm0LpAfb5dOaV5B-k4jn/edit?usp=sharing&ouid=102048050812793693879&rtpof=true&sd=true"
          style={{ minHeight: '500px', maxWidth: '1600px'}}
        />
      </div>
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