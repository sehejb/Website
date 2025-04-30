import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { TextPlugin } from "gsap/TextPlugin";
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, useTexture } from '@react-three/drei';
import { AmbientLight, DoubleSide, PlaneGeometry } from 'three';

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
    // load the model
    const gltf = useGLTF("/techScene.glb")

    return <primitive object={gltf.scene} castShadow scale={0.9} position={[-11, -3.15, -15]}/> // return the actual scene object in 3js 
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
            {y:0, opacity:1, duration:2, delay:0.25})

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
            tlMaster.to({}, {duration: Math.round(word.length / 10)}) // delay of 0.1s per char
        
        // play the timeline
        tlMaster.play()
        })
    })

    return (
        // put contents in the center and stack them on top of each other
        <div className='flex bg-black flex-col justify-center text-black p-3'>
            {/* center them, size of 8xl */}
            <div id='intro' className='flex justify-center text-7xl mt-5 text-white'>
                Hi, I'm Sehej Brar
            </div>
            
            {/* center them, size of 6xl, margin 10 and padding 2 */}
            <div className='flex justify-center text-5xl mt-7 text-white'> {/*style={{"display": "flex"}}*/}
                <div ref={titleRef}></div>
                <div id='cursor'>|</div>
            </div>
            
            {/* set up the canvas and place the mocdel on it */}
            <div className='w-full h-[950px] mt-7 p-3'>
                <Canvas shadows camera={{position: [-525, 175, 275], fov: 60}}>
                    <Floor/>

                    <Model/> 
                   
                    {/* zoom in until 10 units away, zoom out until 60 units away */}
                    <OrbitControls autoRotate autoRotateSpeed={3} minDistance={25} maxDistance={80}/>
                    
                    {/* for the model itself */}
                    <spotLight castShadow position={[10, 150, 60]} intensity={2.5} angle = {0.2} penumbra = {0.7} decay = {0}/>
                    <ambientLight intensity={0.095}/>
                    
                    {/* only on face */}
                    <pointLight position={[-3, 15, -1.5]} intensity={8} decay={2.5}/>

                    {/* from bulb */}
                    <pointLight position={[12, 17, -10]} intensity={20} decay={2.5}/>

                    {/* light out of the lamp */}
                    <pointLight position={[10.7, 20.5, -13]} intensity={20}/>
                </Canvas>
            </div>
        </div>
    )
}

export default Hero;