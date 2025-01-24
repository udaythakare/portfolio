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
    category: 'Full-Stack Project',
    title: 'ScrollConnect – Campus Events Platform',
    description: 'A campus events platform using Next.js (frontend) and Supabase (backend). Enables event creation, discovery, and registration for university students. Features user authentication, real-time updates, and notifications.',
    stack: [
      { name: 'Next.js' },
      { name: 'Supabase' },
      { name: 'WebSockets' },
      { name: 'Tailwind CSS' },
    ],
    image: "/assests/work/scrollconnect.png",
    live: '', // Add live URL if available
    github: '', // Add GitHub repository URL if available
  },
  {
    num: '02',
    category: 'AI Project',
    title: 'LLM Model From Scratch',
    description: 'Built a Large Language Model (LLM) from scratch using PyTorch, leveraging concepts of NLP, backpropagation, and CNNs. Trained on diverse datasets to enhance performance and versatility.',
    stack: [
      { name: 'PyTorch' },
      { name: 'NLP' },
      { name: 'CNNs' },
      { name: 'Backpropagation' },
    ],
    image: "/assests/work/llm.png",
    live: '', // Add live URL if available
    github: '', // Add GitHub repository URL if available
  },
  {
    num: '03',
    category: 'Full-Stack Project',
    title: 'ScrollProjects – Project Showcase Platform',
    description: 'A platform for discovering and sharing innovative projects using Next.js. Integrated Groq API (Llama) for AI-driven project recommendations and idea generation. Includes an AI Idea Generator, UML Diagram Creator, and Project Showcase.',
    stack: [
      { name: 'Next.js' },
      { name: 'Groq API (Llama)' },
      { name: 'Hugging Face' },
      { name: 'Server-Side Rendering (SSR)' },
    ],
    image: "/assests/work/scrollprojects.png",
    live: '', // Add live URL if available
    github: '', // Add GitHub repository URL if available
  },
  {
    num: '04',
    category: 'Full-Stack Project',
    title: 'Government Website Development',
    description: 'Contributed to building a government website using React.js and Node.js. Implemented analytical functionality, pagination, and other user-friendly features to enhance the Project Management System (PMS) website.',
    stack: [
      { name: 'React.js' },
      { name: 'Node.js' },
      { name: 'Google Cloud Platform (GCP)' },
      { name: 'BigQuery' },
    ],
    image: "/assests/work/govtwebsite.png",
    live: '', // Add live URL if available
    github: '', // Add GitHub repository URL if available
  },
  {
    num: '05',
    category: 'Full-Stack Project',
    title: 'E-commerce Platform',
    description: 'Developed an e-commerce platform using Next.js for the frontend, Node.js for the backend, and MySQL as the database. Introduced virtual shop functionality enabling vendors to create personalized shops and manage product listings.',
    stack: [
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'MySQL' },
      { name: 'Deployment (VPS Hosting)' },
    ],
    image: "/assests/work/ecommerce.png",
    live: '', // Add live URL if available
    github: '', // Add GitHub repository URL if available
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