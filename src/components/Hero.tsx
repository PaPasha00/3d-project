import React from "react";
import { AvatarCanvas } from "./AvatarCanvas";

export const Hero = () => {
    return (
        <section className="bg-[url('/hero-bck.jpg')] bg-center bg-no-repeat bg-cover relative w-full mx-auto h-screen">
            <div className="px-6 absolute inset-0 top-[132px] max-w-7xl mx-auto gap-6">
                <div>
                    <h1 className="text-white font-extrabold flex flex-wrap text-[40px] md:text-7xl">Мои <span className="text-theme"> работы</span></h1>
                    <p className="text-white ml-1 mt-1">
                        Васев Павел Евгеньевич
                    </p>
                </div>
            </div>
            <div className="relative z-10 h-screen w-screen">
                <AvatarCanvas />
            </div>

        </section>
    )
};