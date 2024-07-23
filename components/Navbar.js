import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex w-full justify-between h-20 items-center'>
            <div className='ml-10 text-2xl'>
                Uday Thakare
            </div>

            <div className='flex space-x-4 mr-10'>
                <Link href='/'>Home</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/blogs'>Blogs</Link>
                <Link href='/about'>About</Link>
                <Link href='/skills'>Skills</Link>
                <Link href='/work-experience'>Experience</Link>
            </div>


        </div>


    )
}

export default Navbar
