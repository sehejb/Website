import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { useEffect, useRef } from 'react';
import { SiGithub, SiLinkedin, SiMailboxdotorg} from 'react-icons/si';

const SystemOff = () => {
    const services = ["portfolio.service", "experience.service", "projects.service", "skills.service"]
    const permsRef = useRef()
    const signOutRef = useRef()
    const targetRef = useRef()
    let tl = gsap.timeline({repeat: 0})

    useGSAP(() => {
        tl.fromTo(".bar", {width: "0%"}, 
            {width: "60%", duration: 2, stagger: 2}, "+=0.25"
        )

        tl.to(permsRef.current, {duration: 3, text: "Power off? [Y/N]    Y", ease: gsap.SteppedEase}, "+=1.25")

        tl.fromTo(signOutRef.current, {y: 50, opacity:0}, 
            {y:0, opacity:1},"+=1.25"
        )

        tl.fromTo(".socials", {y: 50, opacity:0}, 
            {y:0, opacity:1, duration:1, stagger: 1.25}
        )

        tl.play()
    
    } ,[]);

    useEffect(() => {

    })

    return (
        <div className="w-full h-full font-mono overflow-hidden">
            <h1 className="text-3xl text-white flex justify-center">Shutting down sehej-brar.dev...</h1>
            <div ref={targetRef} className="w-full h-full flex">
                <div className="w-1/2 h-full items-start justify-start">
                    <p className="text-2xl text-white flex justify-center pt-3">Stopping Services...</p>
                    <ul className="list-none text-white text-xl pl-7 pt-2 space-y-5 my-4">
                        {services.map((serv, i) => (
                            <li key={serv} className="flex flex-row">
                                <span className="w-[25ch]">{serv}</span>
                                <div className="bar pl-10 h-[28px] flex bg-white"/>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col justify-center items-center">
                        <p ref={permsRef} className="font-mono text-white text-xl m-7"></p>
                        <p ref={signOutRef} className="font-mono text-green-600 text-xl m-7">Process Completed.</p>
                    </div>
                </div>

                <div className="w-1/2 h-full">
                    <h1 className="socials text-2xl text-white justify-center pt-3 flex">Want to Boot Up a Conversation?</h1>

                    <div className="flex flex-col items-center">
                        <a className='socials flex flex-row w-[17vw]' href="https://github.com/sehejb" target="_blank" rel="noopener noreferrer">
                            <SiGithub className="h-16 w-16 text-gray-600 m-7"/>
                            <div className="flex h-23 flex-col justify-center"> 
                                <p className='text-white text-2xl'>Github</p>
                                <p className='text-white'>See More of My Projects</p>
                            </div>
                        </a>

                        <a className='socials flex flex-row w-[17vw]' href="https://www.linkedin.com/in/sehej-brar/" target="_blank" rel="noopener noreferrer">
                            <SiLinkedin className="h-16 w-16 text-blue-600 m-7"/>
                            <div className="flex h-23 flex-col justify-center">
                                <p className='text-white text-2xl'>LinkedIn</p>
                                <p className='text-white'>Let's Connect</p>
                            </div>
                        </a>

                        <a className='socials flex flex-row w-[17vw]' href="mailto:email" target="_blank" rel="noopener noreferrer">
                            <SiMailboxdotorg className="h-16 w-16 text-white m-7"/>
                            <div className="flex h-23 flex-col justify-center">
                                <p className='text-white text-2xl'>Mail</p>
                                <p className='text-white'>email here</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SystemOff;