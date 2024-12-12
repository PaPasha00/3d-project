import { Html, OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { MyLoader } from "./MyLoader";

const Avatar = ({buttonOnModel, pause, setPause, animationMode}) => {
    const [isAnimation, setIsAnimation] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [position, setPosition] = useState(0);
    const avatar = useGLTF('/VasKis7.glb');
    const animation = useAnimations(avatar.animations, avatar.scene);
    const ref = useRef(null)
    let color = {}

    useEffect(() => {
        if (isAnimation) {
            if (pause) {
                animation.names.map((name) => {
                    //@ts-ignore
                    animation.actions[name].paused = true
                })
            } else {
                animation.names.map((name) => {
                    //@ts-ignore
                    animation.actions[name].paused = false
                })
            }
        }
    }, [pause])

    useEffect(() => {
        if (!isAnimation) {
            animation.names.map((name) => {
                //@ts-ignore
                animation.actions[name]?.reset().fadeIn(0.5).stop();
            })
        } else {
            animation.names.map((name) => {
                //@ts-ignore
                animation.actions[name]?.reset().fadeIn(0.5).play();
            })
        }

        return () => {
            animation.actions[animation.names[0]]?.fadeOut(0.5)
        }
    }, [isAnimation, animation.actions, animation.names])

    const handleOver = (event, name) => {
        const colorThis = event.object.material.color
        if (!(name in color)) {
            let newArr = {...color}
            newArr[`${name}`] = colorThis.getHex()
            color = newArr
        }
        event.object.material.color.set(`hotpink`)
    }
    const handleOut = (event, name) => {
        event.object.material.color.setHex(color[name])
    }

    return (
        <>{
            window.innerWidth >= 650
                ? <>
                {
                    !animationMode ? <group
                    ref={ref}
                    scale={0.45}
                    position-y={-2}
                    rotation-y={-10}
                    position-x={0}
                    rotation-x={0.1}>
                    {Object.keys(avatar?.nodes)?.map((el) => {
                        return (<mesh 
                        key={el}
                        scale={avatar?.nodes?.[el]?.scale}
                        onPointerOver={(ev) => handleOver(ev, el)}
                        onPointerOut={(ev) => handleOut(ev, el)}
                        onPointerLeave={(ev) => handleOut(ev, el)}
                        geometry={avatar?.nodes?.[el]?.geometry}
                        material={avatar?.nodes[el]?.material}
                        position={avatar?.nodes?.[el]?.position}>
                        </mesh>
                    )})}
            
             
                {buttonOnModel && <Html className="relative z-[10]" position={[3.7, 0.2, 0]}>
                    <button onClick={() => {
                        setIsAnimation((prev) => !prev)
                        setIsClicked(!isClicked)
                        setPosition((position + 1) % animation.names.length)
                        setPause(false)
                    }}
                        className="bg-[linear-gradient(90deg,#ff3e9f,#fc4e00)] text-white font-bold z-[20] w-[100px] p-2 rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-white hover:scale-105 duration-500 transition-all"
                    >
                        {
                            !isAnimation ? 'Включить' : 'Выключить'
                        }
                    </button>
                </Html>
}
            </group> : <group >
                    <primitive
                        object={avatar.scene}
                        scale={0.45}
                        position-y={-2}
                        rotation-y={-10}
                        position-x={0}
                        rotation-x={0.1}
                        ref={ref}
                    />
                 
                    {buttonOnModel && <Html className="relative z-[10]" position={[3.7, 0.2, 0]}>
                        <button onClick={() => {
                            setIsAnimation((prev) => !prev)
                            setIsClicked(!isClicked)
                            setPosition((position + 1) % animation.names.length)
                            setPause(false)
                        }}
                            className="bg-[linear-gradient(90deg,#ff3e9f,#fc4e00)] text-white font-bold z-[20] w-[100px] p-2 rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-white hover:scale-105 duration-500 transition-all"
                        >
                            {
                                !isAnimation ? 'Включить' : 'Выключить'
                            }
                        </button>
                    </Html>
}
                </group>
                }
                </> 
                : 
                <>
                {
                    !animationMode ? <group
                    ref={ref}
                    scale={0.45}
                    position-y={-2}
                    rotation-y={-10}
                    position-x={0}
                    rotation-x={0.1}>
                    {Object.keys(avatar?.nodes)?.map((el) => {
                        return (<mesh 
                        key={el}
                        scale={avatar?.nodes?.[el]?.scale}
                        onPointerOver={(ev) => handleOver(ev, el)}
                        onPointerOut={(ev) => handleOut(ev, el)}
                        onPointerLeave={(ev) => handleOut(ev, el)}
                        geometry={avatar?.nodes?.[el]?.geometry}
                        material={avatar?.nodes[el]?.material}
                        position={avatar?.nodes?.[el]?.position}>
                        </mesh>
                    )})}
            
             
                {buttonOnModel && <Html className="relative z-[10]" position={[3.7, 0.2, 0]}>
                    <button onClick={() => {
                        setIsAnimation((prev) => !prev)
                        setIsClicked(!isClicked)
                        setPosition((position + 1) % animation.names.length)
                        setPause(false)
                    }}
                        className="bg-[linear-gradient(90deg,#ff3e9f,#fc4e00)] text-white w-[100px] z-[20] font-bold p-2 rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-white hover:scale-105 duration-500 transition-all"
                    >
                        {
                            !isAnimation ? 'Включить' : 'Выключить'
                        }
                    </button>
                </Html>
}
            </group> : <group >
                    <primitive
                        object={avatar.scene}
                        scale={0.45}
                        position-y={-2}
                        rotation-y={-10}
                        position-x={0}
                        rotation-x={0.1}
                        ref={ref}
                    />
                 
                    {buttonOnModel && <Html className="relative z-[10]" position={[3.7, 0.2, 0]}>
                        <button onClick={() => {
                            setIsAnimation((prev) => !prev)
                            setIsClicked(!isClicked)
                            setPosition((position + 1) % animation.names.length)
                            setPause(false)
                        }}
                            className="bg-[linear-gradient(90deg,#ff3e9f,#fc4e00)] text-white w-[100px] z-[20] font-bold p-2 rounded-lg text-xs sm:text-lg sm:w-[200px] hover:bg-white hover:scale-105 duration-500 transition-all"
                        >
                            {
                                !isAnimation ? 'Включить' : 'Выключить'
                            }
                        </button>
                    </Html>}
                </group>
                }
                </> 
        }</>
    )
}

export const AvatarCanvas = ({buttonOnModel, rotation, pause, setPause, animationMode}) => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[1, 1, 1]} />
            <OrbitControls autoRotateSpeed={0.5} autoRotate={rotation} maxDistance={12} minDistance={4} enabled={true} />
            <Suspense fallback={<MyLoader />}>
                <Avatar animationMode={animationMode} setPause={setPause} buttonOnModel={buttonOnModel} pause={pause}/>
            </Suspense>
            <Preload all />
        </Canvas>
    );
} 