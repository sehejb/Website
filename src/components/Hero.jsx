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

        // Cursor animation
        // Fades out cursor, repeats the animation, reverses animation so it fades in, each fade lasts 2s, animation
        gsap.to("#cursor", {opacity:0, repeat:-1, yoyo:true, duration:0.5, ease:"power2.inOut"})
    })

    // A timeline that manages the animations for the titles (repeats infintely, 1 sec delay)
    let tlMaster = gsap.timeline({repeat:-1, repeatDelay: 2})

    // For each title
    titles.forEach((word) => {

        // 3s to type the word, current word is animated
        tlMaster.to("#animated-text", {duration: 3, text: word, ease: gsap.SteppedEase})

        // for the text to remain
        tlMaster.to("#animated-text", {duration: 2, text: word, ease: 'none'})

        // 2s to clear the word, 2s delay for the word to be seen
        tlMaster.to("#animated-text", {duration: 2, text:"", ease: gsap.SteppedEase})
    })

    // play the timeline
    tlMaster.play()

    return (
        <div className='flex justify-center text-black'>
            <div id='intro' className='text-8xl mt-10 p-2'>
                Hi, I'm Sehej Brar
            </div>
            
            <div style={{"display": "flex"}}>
                <div id="animated-text"></div>
                <div id='cursor'>|</div>
            </div>
        </div>
    )
}

export default Hero;