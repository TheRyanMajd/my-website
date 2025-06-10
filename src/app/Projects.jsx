import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';
import banner from "../../public/banner.svg";
import BPj from "../../public/BPjavathumbnail.png";
import EC from "../../public/eventcast.png";
import ghce from "../../public/ghce.png";
import jChristmas from "../../public/javaChristmasProject.png";
import KTP from "../../public/ktp.png";
import linkedin from "../../public/linkedin.jpeg";
import picto from "../../public/picto.png";
import truck from "../../public/truck.jpeg";
import ProjectCard from "./ProjectCards";

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
export default function Project() {
    return (
      <>
      <section className="my-8">
        <AOSInit/>
        <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2" data-aos='flip-up' data-aos-duration='400'>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore my Projects</h2>
              </div>
            </div>
      </section>
<section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-6" data-aos='fade-in' data-aos-duration='800'>
<ProjectCard
title="GitHub Campus Expert"
description="Selected as one of a few hundred student leaders worldwide trained by GitHub to build diverse, inclusive tech communities. I design and run workshops, hackathons, and open-source initiatives at UGA—bridging classroom theory with real-world collaboration while giving peers access to GitHub resources and mentorship."
linkHref="https://githubcampus.expert/TheRyanMajd//"
imageUrl={ghce}
year={"2025"}
/>

<ProjectCard
title="Kappa Theta Pi at UGA"
description="Founded the Phi Chapter of Kappa Theta Pi, a co-ed professional technology fraternity at the University of Georgia. Led the establishment process, securing official recognition, building an executive board, and organizing recruitment, professional development events, and technical workshops to foster a strong community of aspiring technologists."
linkHref="https://ktpGeorgia.com"
imageUrl={KTP}
year={"est. 2024"}
/>

<ProjectCard
title="TravelByte Inc."
description="Co-Founded TravelByte, a SaaS for trucking and logistics operations under the Fusen Fellowship. Currently building a MVP utilizing React Native and Google Cloud Platform."
linkHref="https://travelbyte.net"
imageUrl={truck}
year={"est. 2024"}
/>

<ProjectCard
title="imgToICS"
description="The imgToICS application is designed to convert images/flyers containing event details into ICS (iCalendar) files. It is programmed in Python and available in two formats: a graphical user interface (GUI) and a command line interface (CLI)."
linkHref="https://github.com/TheRyanMajd/img-to-ics"
imageUrl={banner}
year={"2024"}
/>


<ProjectCard
title="PictoChat (Clone)"
description="Our PictoChat (Clone) project recreates the nostalgic PictoChat experience with modern enhancements, focusing on dynamic chat interfaces, user authentication, and seamless communication. Despite a last-minute pivot, we successfully integrated key components like canvas drawing, MongoDB, and a robust authentication system."
linkHref="https://github.com/alexteal/webdev2024"
imageUrl={picto}
year={"2024"}
/>

<ProjectCard
title="Ubuntu Home Server"
description="Over spring break, I turned a spare laptop into an Ubuntu Server, stepping up my tech game. I've configured it for Samba-based storage, spun up Minecraft servers, and set up a Plex media server. Proud of what's been a perfect blend of hobby and hands-on IT skills development."
linkHref="https://www.linkedin.com/feed/update/urn:li:activity:7172674962745454593/"
imageUrl={linkedin}
year={"2024"}
/>

<ProjectCard
title="Balloon Pop Java Game"
description="This game uses Java's JavaFX Library where players can pop balloons that appear on the screen. It includes various features such as a main menu, playground mode, thirty-second mode, background music, and more!"  
linkHref="https://github.com/TheRyanMajd/balloon-pop-java-game"
imageUrl={BPj}
year={"2023"}
/>

<ProjectCard
  title="EventCast℠"
  description="Integrates OpenWeatherMap and SeatGeek APIs to help users plan their day. By retrieving the user's location, checking for events within a 20-mile radius, and providing the day's weather forecast, the program offers a convenient tool for users to plan around both weather conditions and local events."
  imageUrl={EC}
  linkHref="mailto:ryan.majd@uga.edu?subject=Request Access to EventCast℠ Repository"
  year={"2023"}
/>

<ProjectCard
  title="2022 Christmas List"
  description="This project was created using what I learned in AP Computer Science A and UGA's Introduction to Computing class (CSCI 1301) to make a silly program that assists in providing gift choices from my family!"
  imageUrl={jChristmas}
  linkHref="https://github.com/RyanMajd/Projects/blob/main/ChristmasList.java"
  year={"2022"}
/>

    </section>
    </>
    )
}

