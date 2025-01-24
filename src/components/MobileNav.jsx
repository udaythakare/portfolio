"use client"
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from "react-icons/ci"

const Links = [
    {
        name: 'home',
        path: "/",
    },
    {
        name: 'about',
        path: "/resume",
    },
    {
        name: 'services',
        path: "/services",
    },
    {
        name: 'work',
        path: "/work",
    },
    {
        name: 'contact',
        path: "/contact",
    },
]

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className='mt-32 mb-28 text-center text-2xl'>
                    <Link href='/'>
                        <h1 className="text-4xl font-semibold">
                            A<span className="text-accent">J</span>
                        </h1>
                    </Link>
                </div>
                <nav className='flex flex-col gap-8 items-center'>
                    {Links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`${link.path === pathname &&
                                "text-accent border-b-2 border-accent"
                                } text-xl capitalize hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
