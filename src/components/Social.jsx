"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
    { icons: <FaGithub />, path: "https://github.com/Aditya-jambhale" },
    { icons: <FaLinkedin />, path: "https://www.linkedin.com/in/adityajambhale" },
    { icons: <FaTwitter />, path: "https://twitter.com/AdityaJambhal18" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icons}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
