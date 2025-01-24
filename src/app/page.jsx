"use client";

import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-white/80">Backend Developer</span>
            <h1 className="h2 mt-4">
              Hello, I'm <br />
              <span className="text-accent h2">Aditya Jambhale</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Experienced in backend development, skilled in building efficient APIs,
              managing databases, and creating secure, scalable server-side solutions.
            </p>
            {/* Buttons and Social Links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/file/d/1xDp0KvaOhCYzpNk2xY6XsCRLD4l9GVbV/view?usp=sharing"
                download="Aditya Jambhale.pdf"
                className="uppercase flex items-center gap-2"
              >
                <Button variant="outline" size="lg">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="flex-shrink-0">
            <Photo className="rounded-full border border-white/10" />
          </div>
        </div>
      </div>
      {/* Stats */}
      <Stats />
    </section>
  );
};

export default Home;
