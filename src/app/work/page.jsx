'use client';

import { motion } from "framer-motion";
import React, { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/ui/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'full-stack Project',
    title: 'DevFlow - Social Media Analysis',
    description: 'A comprehensive analytics dashboard for social media insights. The platform visualizes metrics like likes, comments, shares, and reach across different post types (carousel, static, reels). Includes AstraDB integration for data fetching.',
    stack: [
      { name: 'Next.js' },
      { name: 'tailwind' },
      { name: 'AstraDB' },
    ],
    image: "/assests/work/Devflow.png",
    live: 'https://super-level-mind.vercel.app',
    github: 'https://github.com/Aditya-jambhale/SuperlevelMindHack',
  },

  {
    num: '02',
    category: 'Full Stack Project',
    title: 'Book Store Application',
    description: 'A web application for browsing, searching, and managing books, offering features like viewing details, adding entries, and updating records. It ensures efficient book management with a user-friendly interface.',
    stack: [
      { name: 'MERN-STack' },
      { name: 'tailwind.css' },
    ],
    image: "/assests/work/bookstore.png",
    live: 'https://book-store-app-frontend-beige.vercel.app/',
    github: 'https://github.com/Aditya-jambhale/Book-Store-app',
  },
  {
    num: '03',
    category: 'Frontend Project',
    title: 'Hacktoberfest Workflow',
    description: 'A frontend application for project discovery and resource sharing, aimed at helping contributors explore repositories and access tools for effective open-source participation during Hacktoberfest.',
    stack: [
      { name: 'React.js' },
      { name: 'tailwind.css' },

    ],
    image: "/assests/work/Github.png",
    live: 'https://hacktober-workflow.vercel.app/',
    github: 'https://github.com/Aditya-jambhale/Hacktober-Workflow',
  },
  {
    num: '04',
    category: 'full-stack Project',
    title: 'Edu-Connect',
    description: 'EduConnect is a web-based platform that connects students with educational resources, instructors, and peers to enhance their learning experience. The platform provides tools to facilitate study sessions, discussion forums, and personal learning plans.',
    stack: [
      { name: 'Python' },
      { name: 'Next.js' },
      { name: 'tailwind.css' },
      { name: 'GenAi' },

    ],
    image: "/assests/work/Edu.png",
    live: '',
    github: 'https://github.com/Aditya-jambhale/Edu-Connect',
  },
  {
    num: '05',
    category: 'full-stack Project',
    title: 'Regional Transport Office(RTO)',
    description: 'The project is a service based website having the services to Renew the licence and etc is in the files.I have used the handlebars and node in the backend with the SQL Database.',
    stack: [
      { name: 'HTMl5' },
      { name: 'Handlebars.js' },
      { name: 'Css' },
      { name: 'SQL' },


    ],
    image: "/assests/work/RTO.png",
    live: 'https://rto-regional-transport-office.vercel.app/',
    github: 'https://github.com/Aditya-jambhale/RTO--Regional-Transport-office-',
  },
  {
    num: '06',
    category: 'full-stack Project',
    title: 'Nextauthapp',
    description: 'This project was created to understand the basics of nextauth and project structure of nextjs',
    stack: [
      { name: 'Nextjs' },
      { name: 'MongoDb Atlas' },
      { name: 'tailwind.css' },
    ],
    image: "/assests/work/next.png",
    live: 'https://nextauthapp-sigma.vercel.app/',
    github: 'https://github.com/Aditya-jambhale/nextauthapp',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project Details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline number */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Tech Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-lg text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* Project Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Placeholder for project image */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full ">
                      <Image src={project.image}
                        fill
                        alt=""
                        className="object-contain"
                      ></Image>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/*buttons swiper */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
