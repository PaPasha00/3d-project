import React, { useEffect, useState } from "react";
import { AvatarCanvas } from "./AvatarCanvas";
export const Hero = () => {
    const [buttonOnModel, setButtonOnModel] = useState(true)
    const [rotation, setRotation] = useState(true)
    const [pause, setPause] = useState(false)
    const [animationMode, setAnimationMode] = useState(true)

    useEffect(() => {
        if (animationMode) {
            //@ts-ignore
            document.querySelector('#myCheckbox1').checked = buttonOnModel
            //@ts-ignore
            document.querySelector('#myCheckbox2').checked = rotation
        }
        
    }, [buttonOnModel, rotation, animationMode])
    return (
        <section className="bg-[url('/hero-bck.jpg')] bg-center bg-no-repeat bg-cover relative w-full mx-auto h-screen">
            
            <div className="px-0 absolute inset-0 top-[50px] left-[50px] flex align-center max-w-7xl mx-auto gap-6">
            <div className="flex flex-col space-y-4 z-[999999000000]">
            <div onClick={() => {
                    setAnimationMode((prev) => {
                        if (prev) {
                            setButtonOnModel(false)
                        } else {
                            setButtonOnModel(true)
                        }
                        return !prev
                })
                    
                }} className="flex items-center cursor-pointer z-[999999000000]">
                    <span className="bg-[linear-gradient(90deg,#ff3e9f,#fc4e00)] text-white font-bold z-[20] w-[fit-content] p-2 rounded-lg text-xs sm:text-lg hover:bg-white hover:scale-105 duration-500 transition-all">
                        {!animationMode ? 'Hover mode' : 'Animate mode'}
                    </span>
                </div>
                {animationMode && (<>
                    <div onClick={() => setPause((prev) => !prev)} className="flex items-center cursor-pointer z-[999999000000]">
                    <span className="bg-[linear-gradient(90deg,#ff3e9f,#fc4e00)] text-white font-bold z-[20] w-[fit-content] p-2 rounded-lg text-xs sm:text-lg hover:bg-white hover:scale-105 duration-500 transition-all">
                        {!pause ? 'Остановить' : 'Продолжить'} анимацию
                    </span>
                    </div>
                    <div onClick={() => {
                        setButtonOnModel((prev) => !prev)
                    }} className="flex items-center cursor-pointer z-[999999000000]">
                        <input  type="checkbox" id='myCheckbox1' className="form-checkbox text-blue-600 h-5 w-5" />
                        <span className="ml-2 text-white font-bold no-underline">Кнопка анимации</span>
                    </div>
                </>)}
                <div onClick={() => setRotation((prev) => !prev)} className="flex items-center cursor-pointer z-[999999000000]">
                    <input  type="checkbox" id='myCheckbox2' className="form-checkbox text-blue-600 h-5 w-5" />
                    <span className="ml-2 text-white font-bold  no-underline">Автоповорот</span>
                </div>
            </div>
                <div>
                    <h1 className="text-white font-extrabold flex flex-wrap text-[10px] md:text-2xl">Васев <span className="text-white ml-4"> Киселев</span></h1>
                </div>
            </div>
            <div className="relative z-10 h-screen w-screen">
                <AvatarCanvas animationMode={animationMode} buttonOnModel={buttonOnModel} rotation={rotation} setPause={setPause} pause={pause} />
            </div>
        </section>
    )
};