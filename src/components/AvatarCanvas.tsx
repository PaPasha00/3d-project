import { Html, OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { MyLoader } from "./MyLoader";

const Avatar = () => {
    const [index, setIndex] = useState(2);
    const [isClicked, setIsClicked] = useState(false);
    const [position, setPosition] = useState(0);
    const avatar = useGLTF('/animation8.glb');
    const { actions, names } = useAnimations(avatar.animations, avatar.scene);

    useEffect(() => {
        actions[names[index]]?.reset().fadeIn(0.5).play();

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
                        scale={2}
                        position-y={-2}
                        rotation-y={-0.5}
                        position-x={0.4}
                    />
                    <Html className="relative z-[10]" position={[-3.7, 0.2, 0]}>
                        <button onClick={() => {
                            setIndex((index + 1) % names.length)
                            setIsClicked(!isClicked)
                            setPosition((position + 1) % names.length)
                        }}
                            className="bg-theme text-black font-bold z-[20] w-[100px] p-2 rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-white hover:scale-105 duration-500 transition-all"
                        >
                            Зацени движения
                            <p className="text-[#626262] text-[10px]">
                                {`${position + 1}/4`}
                            </p>
                        </button>
                    </Html>
                </group>
                :
                <group>
                    <primitive
                        object={avatar.scene}
                        scale={1.5}
                        position-y={-2}
                        rotation-y={-0.5}
                        position-x={1}
                    />
                    <Html position={[-1.5, -0.5, 0]}>
                        <button onClick={() => {
                            setIndex((index + 1) % names.length)
                            setIsClicked(!isClicked)
                            setPosition((position + 1) % names.length)
                        }}
                            className="bg-theme text-black w-[100px] z-[20] font-bold p-2 rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-white hover:scale-105 duration-500 transition-all"
                        >
                            Зацени движения
                            <p className="text-[#626262] text-[10px]">
                                {`${position + 1}/4`}
                            </p>
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