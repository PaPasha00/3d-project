import React from "react";
import { AvatarCanvas } from "./AvatarCanvas";

export const Hero = () => {
    return (
        <section className="bg-[url('/hero-bck.jpg')] bg-center bg-no-repeat bg-cover relative w-full mx-auto h-screen">
            <div className="px-6 absolute inset-0 top-[132px] max-w-7xl mx-auto gap-6">
                <div>
                    <h1 className="text-white font-extrabold flex flex-wrap text-[40px] md:text-7xl">Анимация <span className="text-theme"> персонажа</span></h1>
                    <p className="hidden sm:block text-white text-lgmt-9 w-[550px]">
                        Нажмине на кнопку и посмотрте как он двигается
                    </p>
                </div>
            </div>
            <AvatarCanvas />
        </section>
    )
};