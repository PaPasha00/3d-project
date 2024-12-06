import { Html, OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { MyLoader } from "./MyLoader";

const Avatar = () => {
    const [index, setIndex] = useState(1);
    const [isClicked, setIsClicked] = useState(false);
    const [position, setPosition] = useState(0);
    const avatar = useGLTF('/VasKis7.glb');
    const { actions, names } = useAnimations(avatar.animations, avatar.scene);

    useEffect(() => {
        if (index % 2 === 1) {
            actions['1 Вращение_2Action.001']?.reset().fadeIn(0.5).stop();
        actions['2 Копия_2Action.001']?.reset().fadeIn(0.5).stop();
        actions['3 Деталь_2 (Front_grb (Внутренний))Action.001']?.reset().fadeIn(0.5).stop();
        actions['4 Сглаживание_2Action.001']?.reset().fadeIn(0.5).stop();
        actions['5 Булева_14Action.001']?.reset().fadeIn(0.5).stop();
        actions['6 Сглаживание_19Action.001']?.reset().fadeIn(0.5).stop();
        actions['7 Сглаживание_18Action.001']?.reset().fadeIn(0.5).stop();
        actions['8 Сглаживание_17Action.001']?.reset().fadeIn(0.5).stop();
        actions['9 Сглаживание_15Action.001']?.reset().fadeIn(0.5).stop();
        actions['10 Сглаживание_7Action.001']?.reset().fadeIn(0.5).stop();
        actions['11 Копия_4Action.001']?.reset().fadeIn(0.5).stop();
        actions['12 Наложение материала_1Action.003']?.reset().fadeIn(0.5).stop();
        actions['13 Булева_16Action.001']?.reset().fadeIn(0.5).stop();
        actions['14 Булева_17Action.001']?.reset().fadeIn(0.5).stop();
        } else {
            actions['1 Вращение_2Action.001']?.reset().fadeIn(0.5).play();
            actions['2 Копия_2Action.001']?.reset().fadeIn(0.5).play();
            actions['3 Деталь_2 (Front_grb (Внутренний))Action.001']?.reset().fadeIn(0.5).play();
            actions['4 Сглаживание_2Action.001']?.reset().fadeIn(0.5).play();
            actions['5 Булева_14Action.001']?.reset().fadeIn(0.5).play();
            actions['6 Сглаживание_19Action.001']?.reset().fadeIn(0.5).play();
            actions['7 Сглаживание_18Action.001']?.reset().fadeIn(0.5).play();
            actions['8 Сглаживание_17Action.001']?.reset().fadeIn(0.5).play();
            actions['9 Сглаживание_15Action.001']?.reset().fadeIn(0.5).play();
            actions['10 Сглаживание_7Action.001']?.reset().fadeIn(0.5).play();
            actions['11 Копия_4Action.001']?.reset().fadeIn(0.5).play();
            actions['12 Наложение материала_1Action.003']?.reset().fadeIn(0.5).play();
            actions['13 Булева_16Action.001']?.reset().fadeIn(0.5).play();
            actions['14 Булева_17Action.001']?.reset().fadeIn(0.5).play();
        }

        return () => {
            actions[names[index]]?.fadeOut(0.5)
        }
    }, [index, actions, names])

    return (
        <>{
            window.innerWidth >= 650
                ? <group>
                    <primitive
                        object={avatar.scene}
                        scale={0.45}
                        position-y={-2}
                        rotation-y={-10}
                        position-x={0}
                        rotation-x={0.1}
                    />
                    <Html className="relative z-[10]" position={[3.7, 0.2, 0]}>
                        <button onClick={() => {
                            setIndex((index + 1) % names.length)
                            setIsClicked(!isClicked)
                            setPosition((position + 1) % names.length)
                        }}
                            className="bg-[linear-gradient(90deg,#ff3e9f,#fc4e00)] text-white font-bold z-[20] w-[100px] p-2 rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-white hover:scale-105 duration-500 transition-all"
                        >
                            {
                                index % 2 === 1 ? 'Включить' : 'Выключить'
                            }
                        </button>
                    </Html>
                </group>
                :
                <group>
                    <primitive
                        object={avatar.scene}
                        scale={0.35}
                        position-y={-2}
                        rotation-y={-10}
                        position-x={0}
                        rotation-x={0.1}
                    />
                    <Html position={[0.5, -0.5, 0]}>
                        <button onClick={() => {
                            setIndex((index + 1) % names.length)
                            setIsClicked(!isClicked)
                            setPosition((position + 1) % names.length)
                        }}
                            className="bg-[linear-gradient(90deg,#ff3e9f,#fc4e00)] text-white w-[100px] z-[20] font-bold p-2 rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-white hover:scale-105 duration-500 transition-all"
                        >
                            {
                                index % 2 === 1 ? 'Включить' : 'Выключить'
                            }
                        </button>
                    </Html>
                </group>
        }</>
    )
}

export const AvatarCanvas = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[1, 1, 1]} />
            <OrbitControls enabled={false} />
            <Suspense fallback={<MyLoader />}>
                <Avatar />
            </Suspense>
            <Preload all />
        </Canvas>
    );
} 