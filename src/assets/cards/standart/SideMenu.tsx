import React from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const links: TLinks[] = [
    {
        name: 'Главная',
        link: "/"
    },
    {
        name: 'Мои работы',
        link: "/cases"
    },
];

type TLinks = {
    name: string,
    link: string
}

const headerVariants = {
    hidden: {
        x: '-100vw',
    },
    visible: {
        x: '0vw',
        transition: {
            duration: 1,
        }
    },
}

export const SideMenu = () => {
    return (
        <motion.div
            className="w-full bg-[url('/menuBack2.png')] bg-center bg-no-repeat bg-cover h-screen px-5 pt-[90px] flex flex-col justify-between fixed z-[998] bg-black"
            variants={headerVariants}
            initial='hidden'
            animate='visible'>

            <nav className="w-full pt-12 h-full flex flex-col justify-start gap-4 items-center text-2xl">
                <span className="min-w-[100px] flex flex-col gap-4">
                    {
                        links.map(({ name, link }) => (
                            <Link className="text-theme font-extrabold text-" key={name} to={`${link}`}>{name}</Link>
                        ))
                    }
                </span>
            </nav>

            <div className="flex w-full h-[100px] flex justify-center gap-5">
                <a href="https://t.me/PaPasha0000" target="_blank">
                    <img className="w-[40px]" src="/social/tg.png" alt="telegram" />
                </a>
                <a href="https://vk.com/papasha00" target="_blank">
                    <img className="w-[40px]" src="/social/vk.png" alt="vk" />
                </a>
            </div>
        </motion.div>
    )
}