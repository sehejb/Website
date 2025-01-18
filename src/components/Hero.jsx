import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const Hero = () => {

    useGSAP(() => {
        gsap.fromTo("#intro", {opacity:0}, {y:200, opacity:100, duration:5, delay:0.25})
    })

    return (
        <div className='flex justify-center text-black'>
        <div id='intro' className='text-8xl mt-10 p-2'>
            Hi, I'm Sehej Brar
        </div>
        <div>A Web Developer and Designer</div>
        </div>
    )
}

export default Hero;