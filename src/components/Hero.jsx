import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin)

const Hero = () => {
    const titles = ["Software Engineer", "Machine Learning Enthusiast", "Website Developer", "UI Designer"]

    useGSAP(() => {
        // Title animation
        // Start: transparent, 50 px below its final position
        // Finish: opaque, at its final position, 2s duration, 0.25s after page load
        gsap.fromTo("#intro", {y: 50, opacity:0}, 
            {y:0, opacity:1, duration:2, delay:0.25})

        // Curosr animation
        // Fades out cursor, repeats the animation, reverses animation so it fades in, each fade lasts 2s, animation
        gsap.to("#cursor", {opacity:0, repeat:-1, yoyo:true, duration:0.5, ease:"power2.inOut"})
    })

    // A timeline that manages the animations for the titles (repeats infintely)
    let tlMaster = gsap.timeline({repeat:-1})

    // For each title
    titles.forEach((word) => {
        // Timelines allow to sequence animations so they run after each other or control the entire sequence as a unit
        let tlText = gsap.timeline({repeat: -1})

        // 3s to type the word, current word is animated
        tlText.to("#animated-text", {duration: 3, text: word, ease:'none'})

        // 3s to clear the word, 2s delay for the word to be seen
        tlText.to("#animated-text", {duration: 3, text:"", delay: 2, ease:'none'})
        tlMaster.add(tlText)
    })

    return (
        <div className='flex justify-center text-black'>
            <div id='intro' className='text-8xl mt-10 p-2'>
                Hi, I'm Sehej Brar
            </div>
            
            <div id='cursor'>|</div>
        </div>
    )
}

export default Hero;