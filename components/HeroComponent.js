import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

const HeroComponent = () => {
    return (
        <div className='flex justify-center'>
            <div className='relative flex flex-col items-center shadow-xl w-4/5 mt-10'>
                <Navbar />
                <div className='flex justify-between items-center w-full mt-10 mb-10'>
                    <div className='flex-1 text-left ml-16'>
                        Hi, I am Uday Thakare
                        <br />
                        I am a Backend Developer
                    </div>
                    <div className='flex-none mr-16'>
                        <Image
                            src='/uday_portfolio.jpg'
                            width={350}
                            height={350}
                            alt='Uday Thakare'
                            className='border rounded-lg overflow-hidden'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroComponent
