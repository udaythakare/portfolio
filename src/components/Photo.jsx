"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.4, ease: "easeIn" }
                }}
            >
                <div className="w-[500px] h-[500px] mix-blend-lighten">
                    <Image
                        src="/assests/uday.jpeg"
                        priority
                        quality={100}
                        alt=""
                        className="object-cover"
                        width={500}
                        height={300}
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default Photo
