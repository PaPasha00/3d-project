import React from "react";
import { motion } from "framer-motion";
import { CardCases } from "../assets/cards/CardCases";
import { Header } from "../assets/cards/standart/Header";

const CASES: TCases[] = [
    {
        name: 'Way-11',
        link: 'https://way11-web-app.vercel.app/',
        img: './cases/way.jpg',
        pos: 1,
    },
    {
        name: 'Прогулки по Перми',
        link: 'https://progulki-po-permi.ru/',
        img: './cases/ppm.jpg',
        pos: 2,
    },
    {
        name: 'Todo app',
        link: 'https://todo-app-three-sage-44.vercel.app/',
        img: './cases/dnd.jpg',
        pos: 3,
    },
    {
        name: 'Поиск книг',
        link: 'https://book-searching-rose.vercel.app/',
        img: './cases/books.jpg',
        pos: 4,
    },
    {
        name: 'Flappy bird',
        link: 'https://flappy-bird-taupe.vercel.app/',
        img: './cases/bird.jpg',
        pos: 5,
    },
    {
        name: 'Генератор паролей',
        link: 'https://password-generator-eosin-eta.vercel.app/',
        img: './cases/pass.jpg',
        pos: 6,
    },
    {
        name: 'Cherry fitness ',
        link: 'https://web-site-for-fitness-club.vercel.app/',
        img: './cases/cher.jpg',
        pos: 7,
    },
    
];

export type TCases = {
    name: string,
    link: string,
    img: string,
    pos: number
};

const animateVariants = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring'
        }
    }
}

export const Cases = () => {
    return (
        <>
            <Header />
            <motion.section
                className="w-full bg-fixed min-h-screen fixedPosition flex flex-col bg-[url('/casesback.jpg')] bg-center bg-no-repeat bg-cover justify-start p-5 items-center">
                <motion.h1 variants={animateVariants}
                    initial='hidden'
                    animate='visible'
                    className="text-theme font-extrabold text-[25px] md:text-3xl"
                >
                    Мои кейсы
                </motion.h1>
                <div className="w-full h-full mt-10 flex flex-wrap justify-center mx-auto gap-5">
                    {
                        CASES.map((cardObj, index) => (
                            <CardCases key={cardObj.name + index} {...cardObj} />
                        ))
                    }
                </div>
            </motion.section>
        </>
    )
}