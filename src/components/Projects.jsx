import banner from "../../public/banner.svg";
import BPj from "../../public/BPjavathumbnail.png";
import EC from "../../public/eventcast.png";
import ghce from "../../public/ghce.png";
import jChristmas from "../../public/javaChristmasProject.png";
import kronos from "../../public/kronos.jpg";
import KTP from "../../public/ktp.png";
import linkedin from "../../public/linkedin.jpeg";
import localcam from "../../public/localcam.png";
import picto from "../../public/picto.png";
import truck from "../../public/truck.jpeg";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const projects = [
  {
    title: "KRONOS",
    description:
      "Built a 1U self-hosted Proxmox infrastructure server powering production apps, documentation, and developer tooling. Implemented Traefik reverse proxy, containerized services, automated deployments, and hardened security after mitigating large-scale brute force attacks.",
    linkHref: "https://docs.ugaktp.com/docs/kronos/overview",
    imageUrl: kronos,
    year: "2026",
  },
  {
    title: "GitHub Campus Expert",
    description:
      "Selected as one of a few hundred student leaders worldwide trained by GitHub to build diverse, inclusive tech communities. I design and run workshops, hackathons, and open-source initiatives at UGA.",
    linkHref: "https://githubcampus.expert/TheRyanMajd/",
    imageUrl: ghce,
    loading: "eager",
    year: "2025",
  },
  {
    title: "LocalCam",
    description:
      "Android app that revives a 10+ year-old phone as an IP camera. Streams RTSP (H.264 + AAC) with sub-4 second latency using Jetpack Compose. Built entirely in Kotlin for minimal dependencies and optimized local streaming.",
    linkHref: "https://github.com/TheRyanMajd/LocalCam",
    imageUrl: localcam,
    year: "2025",
  },
  {
    title: "Kappa Theta Pi at UGA",
    description:
      "Founded the Phi Chapter of Kappa Theta Pi, a co-ed professional technology fraternity at UGA. Led official recognition, built an executive board, and organized recruitment, professional development, and technical workshops.",
    linkHref: "https://ktpGeorgia.com",
    imageUrl: KTP,
    year: "est. 2024",
  },
  {
    title: "TravelByte Inc.",
    description:
      "Co-founded TravelByte, a SaaS for trucking and logistics operations under the Fusen Fellowship. Building an MVP with React Native and Google Cloud Platform.",
    linkHref: "https://travelbyte.net",
    imageUrl: truck,
    year: "est. 2024",
  },
  {
    title: "imgToICS",
    description:
      "Converts images and flyers containing event details into ICS (iCalendar) files. Available as both a Python GUI and CLI.",
    linkHref: "https://github.com/TheRyanMajd/img-to-ics",
    imageUrl: banner,
    year: "2024",
  },
  {
    title: "PictoChat (Clone)",
    description:
      "Recreates the nostalgic PictoChat experience with modern enhancements — canvas drawing, MongoDB, and a robust authentication system.",
    linkHref: "https://github.com/alexteal/webdev2024",
    imageUrl: picto,
    year: "2024",
  },
  {
    title: "Ubuntu Home Server",
    description:
      "Turned a spare laptop into an Ubuntu Server with Samba storage, Minecraft servers, and a Plex media server — a perfect blend of hobby and hands-on IT skills.",
    linkHref: "https://www.linkedin.com/feed/update/urn:li:activity:7172674962745454593/",
    imageUrl: linkedin,
    year: "2024",
  },
  {
    title: "Balloon Pop Java Game",
    description:
      "JavaFX game where players pop balloons on screen. Features a main menu, playground mode, thirty-second mode, background music, and more.",
    linkHref: "https://github.com/TheRyanMajd/balloon-pop-java-game",
    imageUrl: BPj,
    year: "2023",
  },
  {
    title: "EventCast℠",
    description:
      "Integrates OpenWeatherMap and SeatGeek APIs to help users plan around weather and local events within a 20-mile radius.",
    imageUrl: EC,
    linkHref: "mailto:ryan.majd@uga.edu?subject=Request Access to EventCast℠ Repository",
    year: "2023",
  },
  {
    title: "2022 Christmas List",
    description:
      "A program built with AP Computer Science and UGA CSCI 1301 that assists in providing gift choices for my family.",
    imageUrl: jChristmas,
    linkHref: "https://github.com/RyanMajd/Projects/blob/main/ChristmasList.java",
    year: "2022",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="headline mb-3">Projects</h2>
            <p className="body-lg text-[var(--muted)]">
              Software, infrastructure, and communities I&apos;ve built
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 40}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
