import React from "react";
import { TCases } from "../../components/Cases";
import { motion } from "framer-motion";

const animateVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

export const CardCases = ({ name, link, img, pos }: TCases) => {
    return (
        <motion.div initial='hidden'
            variants={animateVariants}
            animate='visible'
            transition={{
                duration: 0.5,
                delay: pos * 0.5
            }}
            key={name}
            className="h-[250px] w-[300px] flex flex-col justify-between backdrop-blur-xl rounded-xl"
        >
            <img src={img} alt="case image" className="w-full h-[170px] rounded-xl" />
            <div className="flex flex-col p-2 gap-1">
                <h1 className="text-white font-extrabold text-[20px]">{name}</h1>
                <a target="_blank" href={link} className="text-theme border border-theme flex justify-center items-center w-[70%] rounded-md font-medium text-[15px] py-1 hover:bg-theme hover:text-white duration-500 transition-all">Посмотреть кейс</a>
            </div>
        </motion.div >
    )
}