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
            animate='visible'
            >

            <nav className="w-full pt-12 h-full flex flex-col justify-start gap-4 items-center text-2xl">
                <span className="min-w-[100px] flex flex-col gap-4 h-screen">
                    {
                        links.map(({ name, link }) => (
                            <Link className="text-theme font-extrabold text-" key={name} to={`${link}`}>{name}</Link>
                        ))
                    }
                </span>

            </nav>
        </motion.div>
    )
}