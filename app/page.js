import AboutMe from "@/components/AboutMe";
import HeroComponent from "@/components/HeroComponent";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroComponent />
      <AboutMe />
    </div>
  );
}
