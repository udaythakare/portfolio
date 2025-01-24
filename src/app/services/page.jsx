"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const service = [
    {
        num: "01",
        title: "Backend Development",
        description: "Design secure backend systems to power web and mobile apps. Focused on scalability and performance.",
        href: "",
    },
    {
        num: "02",
        title: "Database Management",
        description: "Build and optimize databases for efficient storage. Currently exploring Firebase for real-time data.",
        href: "",
    },
    {
        num: "03",
        title: "JS to TS Conversion",
        description: "Learning to convert JavaScript to TypeScript for better type safety. Improving scalability and maintainability.",
        href: "",
    },
    {
        num: "04",
        title: "API Development",
        description: "Develop secure, scalable APIs for seamless integration. Skilled in RESTful APIs with Node.js and Express.js.",
        href: "",
    },
];



const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {service.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.href}
                                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    ><BsArrowDownRight className="text-primary text-3xl" /></Link></div>
                                <h2 className="text-[42px] leading-none text-white font-bold group-hover:text-accent transition-all duration:500">{service.title}</h2>
                                <p className="text-white/60">{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
