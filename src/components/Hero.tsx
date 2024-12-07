import React, { useEffect, useState } from "react";
import { AvatarCanvas } from "./AvatarCanvas";
export const Hero = () => {
    const [buttonOnModel, setButtonOnModel] = useState(true)
    const [rotation, setRotation] = useState(true)
    useEffect(() => {
        document.querySelector('#myCheckbox1').checked = buttonOnModel
        document.querySelector('#myCheckbox2').checked = rotation
    }, [buttonOnModel, rotation])
    return (
        <section className="bg-[url('/hero-bck.jpg')] bg-center bg-no-repeat bg-cover relative w-full mx-auto h-screen">
            
            <div className="px-0 absolute inset-0 top-[50px] left-[50px] flex align-center max-w-7xl mx-auto gap-6">
            <div className="flex flex-col space-y-4 z-[999999000000]">
                <div onClick={() => {
                    console.log('asd')
                    setButtonOnModel((prev) => !prev)
                }} className="flex items-center cursor-pointer z-[999999000000]">
                    <input  type="checkbox" id='myCheckbox1' className="form-checkbox text-blue-600 h-5 w-5" />
                    <span className="ml-2 text-white font-bold no-underline">Кнопка анимации</span>
                </div>
                
                <div onClick={() => setRotation((prev) => !prev)} className="flex items-center cursor-pointer z-[999999000000]">
                    <input  type="checkbox" id='myCheckbox2' className="form-checkbox text-blue-600 h-5 w-5" />
                    <span className="ml-2 text-white font-bold  no-underline">Автоповорот</span>
                </div>
            </div>
                <div>
                    <h1 className="text-white font-extrabold flex flex-wrap text-[40px] md:text-7xl">Васев <span className="text-white ml-4"> Киселев</span></h1>
                </div>
            </div>
            <div className="relative z-10 h-screen w-screen">
                <AvatarCanvas buttonOnModel={buttonOnModel} rotation={rotation} />
            </div>
        </section>
    )
};