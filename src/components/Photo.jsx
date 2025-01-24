"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            < motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.4, ease: "easeIn" }
                }}
            >
                <div className="w-[298px] h-[198px] xl:w-[498px] xl:h-[350px] mix-blend-lighten">
                    <Image
                        src="/assests/photof.jpg"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain"

                    />
                </div>
            </motion.div>

        </div>
    )

}

export default Photo