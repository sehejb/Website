import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, useTexture, useAnimations } from '@react-three/drei';
import { DoubleSide } from 'three';
import { Button } from '@heroui/react';

gsap.registerPlugin(TextPlugin)

function deleteChar(ref) {
    /* Remove char one at a time starting from the last char */
    let delChar = setInterval(() => {
        const elem = ref?.current
        const len = elem?.textContent.length
        if (len) {elem.textContent = elem?.textContent.substring(0, len - 1)} else {clearInterval(delChar)}
    }, 100); // delete one char every 0.5 s
}

function Model() {
    // ref to model
    let modelRef = useRef()

    // load the model
    const {scene, animations} = useGLTF("/techScene.glb")

    const {actions} = useAnimations(animations, modelRef)

    // run after the render or when action changes
    useEffect(() => {
        actions["Armature|mixamo.com|Layer0"].play()
    }, [actions])

    return <primitive object={scene} ref={modelRef} castShadow scale={0.8} position={[-11, -3.15, -15]}/> // return the actual scene object in 3js 
}

function Floor() {
    // texture for the floor
    const floor = useTexture("/stoneFloor.jpg")

    return (
        <mesh receiveShadow position = {[0, -6.5, 0]} rotation={[-Math.PI/2, 0, 0]}>
            <planeGeometry args={[100, 100]}/>
            <meshStandardMaterial map={floor} side={DoubleSide} roughness={0.75} metalness={0}/>
        </mesh> 
    )
}

const Hero = () => {
    const titles = ["Software Engineer", "Machine Learning Enthusiast", "Website Developer", "UI Designer"]
    let titleRef = useRef()

    // A timeline that manages the animations for the titles (repeats infintely, 1 sec delay)
    let tlMaster = gsap.timeline({repeat:-1, repeatDelay: 2})

    useGSAP(() => {
        // Title animation
        // Start: transparent, 50 px below its final position
        // Finish: opaque, at its final position, 2s duration, 0.25s after page load
        gsap.fromTo("#intro", {y: 50, opacity:0}, 
            {y:0, opacity:1, duration:2, delay:0.25}
        )

        // Cursor animation
        // Fades out cursor, repeats the animation, reverses animation so it fades in, each fade lasts 2s, animation
        gsap.to("#cursor", {opacity:0, repeat:-1, yoyo:true, duration:0.5, ease:"power2.inOut"})

        // For each title
        titles.forEach((word) => {

            // 3s to type the word, current word is animated
            tlMaster.to(titleRef.current, {duration: 3, text: word, ease: gsap.SteppedEase})

            // for the text to remain
            tlMaster.to(titleRef.current, {duration: 2, text: word, ease: 'none'})

            tlMaster.call(() => deleteChar(titleRef)) // add the function into the timeline
            tlMaster.to({}, {duration: Math.round((word.length + 2) / 5)}) // delay of 0.1s per char
        
        // play the timeline
        tlMaster.play()
        })
    })

    return (
        // put contents in the center and stack them on top of each other
        <div className='flex w-full h-full flex-col'>
            <div className='flex flex-col h-1/3 w-screen'>
                {/* center them, size of 8xl */}
                <h1 id='intro' className='flex justify-center text-7xl text-white pt-12'>
                    Hi, I'm Sehej Brar
                </h1>
                
                {/* center them, size of 6xl, margin 10 and padding 2 */}
                <h2 className='flex justify-center text-5xl text-white pt-8'> {/*style={{"display": "flex"}}*/}
                    <div ref={titleRef}></div>
                    <div id='cursor'>|</div>
                </h2>

                <div className='flex justify-center gap-x-4 pt-10'>
                    <Button className='w-[300px] h-[60px] bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 text-white p-[2.5px] mr-10 rounded-full'>
                        <div className='flex items-center justify-center h-full w-full rounded-full text-2xl hover:shadow-xl hover:shadow-red-500/30'>
                            Get in Touch
                        </div>
                    </Button>

                    <Button className='w-[300px] h-[60px] bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 text-white p-[2.5px] rounded-full'>
                        <div className='hover:shadow-lg hover:shadow-purple-500/25 flex h-full w-full items-center justify-center rounded-full text-white transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-900/30 hover:transition hover:duration-300 hover:ease-in-out text-2xl'>
                            About Me
                        </div>
                    </Button>
                </div>
            </div>
            
            {/* set up the canvas and place the model on it */}
            <div className='h-2/3'>
                <div className='w-full h-full'>
                    {/* <Canvas shadows camera={{position: [-525, 215, 30], fov: 33}}> */}
                        {/* <Floor/> */}

                        {/* <Model/>  */}
                    
                        {/* zoom in until 10 units away, zoom out until 60 units away */}
                        {/* <OrbitControls makeDefault target={[-3, 5, -9]} autoRotate autoRotateSpeed={3} minDistance={25} maxDistance={80} enableZoom={false}/> */}
                        
                        {/* for the model itself */}
                        {/* <spotLight castShadow position={[10, 150, 60]} intensity={2.5} angle = {0.2} penumbra = {0.7} decay = {0}/>
                        <ambientLight intensity={0.095}/> */}
                        
                        {/* only on face */}
                        {/* <pointLight position={[-3, 15, -0.6]} intensity={4} decay={2.5}/> */}

                        {/* light out of the lamp */}
                        {/* <pointLight position={[10.7, 20.5, -13]} intensity={20} decay={1.1}/> */}
                    {/* </Canvas> */}
                </div>
            </div>
        </div>
    )
}

useGLTF.preload('/techScene.glb')
export default Hero;