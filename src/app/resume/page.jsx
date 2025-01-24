"use client";
import { FaHtml5, FaCss3, FaJsSquare, FaDatabase, FaNodeJs, FaJava, FaGithub, FaServer } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFirebase, SiMongodb, SiDocker, SiKubernetes, SiTensorflow, SiPytorch, SiScikitlearn, SiOpenai, SiPython, SiAwslambda, SiGooglecloud } from "react-icons/si";
import { AiOutlineApi } from 'react-icons/ai';


//about data
const about = {
    title: 'About me',
    description: "A passionate developer with a knack for problem-solving, constantly exploring innovative ways to build impactful solutions.",
    info: [
        {
            fielname: "Name:",
            fieldvalue: "Uday Thakare"
        }, {
            fielname: "Experience:",
            fieldvalue: "Fresher"
        }, {
            fielname: "Email:",
            fieldvalue: "udaythakare592004@gmail.com"
        },
        {
            fielname: "Phone Number:",
            fieldvalue: "(+91)9867302261"
        }, {
            fielname: "Nationality: ",
            fieldvalue: "Indian"
        },
        {
            fielname: "Languages:",
            fieldvalue: "English,Marathi,Hindi"
        },


    ]
}
//experiecne data 
const experience = {
    icon: "/assests/resume/badge.svg",
    title: "My experience",
    description: "Proven track record in building scalable applications, collaborating with teams, and delivering efficient backend systems.",
    items: [
        {
            company: "AIBI PVT LTD,Airoli",
            title: "Backend Developer Intern",
            duration: "Nov 2024 - Present",
        },
        {
            company: "CSI DMCE,Airoli",
            title: "Technical Team Member",
            duration: "Aug 2024 - Present",
        },
        {
            company: "Hacktoberfest",
            title: "Open Source Contributor",
            duration: "2024",
        },
        {
            company: "Lotus Educare Academy,Kharghar",
            title: "Web Development Intern",
            duration: "Jul 2022 - Aug 2022",
        },
    ]
}
//education data
const education = {
    icon: "/assests/resume/cap.svg",
    title: "My Education",
    description: "Strong academic foundation in computer science, paired with a continuous drive to learn and adapt to evolving technologies",
    items: [
        {
            institution: "Datta Meghe College of Engineering",
            degree: "Bachelor of Engineering-Computer Engineering",
            duration: "2023-2026",
        },
        {
            institution: "Government Polytechnic Thane",
            degree: "Polytechnic, Computer Engineering",
            duration: "2020-2023",
        },

        {
            institution: "SMT. Radhikabai Meghe Vidyalaya",
            degree: "SSC",
            duration: "2020",
        },

    ]
}
//skills data
const skills = {
    title: "My Skills",
    description: "Proficient in backend technologies, databases, cloud services, AI/ML, and modern frameworks, with a focus on delivering clean, maintainable code.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJsSquare />,
            name: "JavaScript",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiFirebase />,
            name: "Firebase",
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <FaServer />,
            name: "Express",
        },
        {
            icon: <AiOutlineApi />,
            name: "REST API",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <FaDatabase />,
            name: "Database",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaGithub />,
            name: "GitHub",
        },
        // Cloud-related skills
        {
            icon: <SiAwslambda />,
            name: "AWS",
        },
        {
            icon: <SiGooglecloud />,
            name: "Google Cloud",
        },
        {
            icon: <SiDocker />,
            name: "Docker",
        },
        {
            icon: <SiKubernetes />,
            name: "Kubernetes",
        },

        {
            icon: <SiPytorch />,
            name: "PyTorch",
        },
        {
            icon: <SiScikitlearn />,
            name: "Scikit-learn",
        },
        {
            icon: <SiOpenai />,
            name: "OpenAI",
        },
        {
            icon: <SiPython />,
            name: "Python",
        },
    ]
}


import { Tabs, TabsList, TabsContent, TabsTrigger } from '../../components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area';
import { motion } from "framer-motion";

const resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
        >
            <div className="container mx-auto ">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About me </TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>

                    </TabsList>

                    {/*content */}
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="rounded-full bg-accent w-[6px] h-[6px]"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>

                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/*education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="rounded-full bg-accent w-[6px] h-[6px]"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>

                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>

                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className=" w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>

                                            </li>)
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/*content */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[750px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index}
                                                className="flex items-center
                                             justify-center xl:justify-start gap-1">
                                                <span className="text-white/60">{item.fielname}</span>
                                                <span className="text-lg">{item.fieldvalue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                        </TabsContent>
                    </div>
                </Tabs>

            </div>

        </motion.div>
    )
}

export default resume