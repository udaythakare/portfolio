"use client"
import Link from "next/link"
import { Button } from "./ui/button"

//components


import Nav from "@/components/Nav"
import MobileNav from "./MobileNav"
const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/*logo*/}
                <Link href='/'>
                    <h1 className="text-4xl font-semibold">
                        U<span className="text-accent">T</span>
                    </h1>
                </Link>
                {/* Desktop Navbar */}

                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    {/* <Link href='https://linktr.ee/aditya_jambhale'>
                        <Button>LinkTree</Button>
                    </Link> */}

                </div>
                <div className="xl:hidden ">
                    <MobileNav />
                </div>

            </div>
        </header>
    )
}

export default Header