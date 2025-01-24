import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
//components 
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";
export const metadata = {
  title: "Aditya Jambhale Portfolio",
  description: "Welcome to Aditya Jambhale's portfolio. Explore my projects, skills, and experiences in web development.",
  keywords: "Aditya,Jambhale , Aditya Jambhale, Backend Devloper, Node.js ,Portfolio, Web Developer, Next.js, MERN Stack,Aditya Shankar Jambhale, CSI-CATT DMCE , CSI DMCE , DMCE ,Jambhale",
  author: "Aditya Jambhale",
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="/favicon.ico" as="image" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Aditya Jambhale Portfolio" />
        <meta property="og:description" content="Explore Aditya Jambhale's web development projects and experiences." />
        <meta property="og:image" content="/photof.jpg" /> {/* Replace with your image */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aditya-jambhale.vercel.app" />
      </Head>
      <body
        className={jetbrainsMono.variable}>
        <Header />
        {/* <StairTransition /> */}
        {/* <PageTransition> */}
        {children}
        {/* </PageTransition> */}

      </body>
    </html>
  );
}
