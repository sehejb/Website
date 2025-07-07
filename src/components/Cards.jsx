import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from 'react'
import Contact from './Contact'
import Footer from './Footer'

gsap.registerPlugin(ScrollTrigger)

const Cards =() => {
    const cardInfo = [
        {
            company: "My Experience",
            desc: "I’m a software developer who enjoys building thoughtful, practical tools — whether it’s real-time interfaces for research labs or internal platforms that help teams work better. I like clean design, clear logic, and code that does its job well.\n\nYou can learn more about what I’ve worked on over on LinkedIn.",
            img: "/desktop.png",
            button: "LinkedIn",
            color: "bg-[#F2F6FC]",
            link: "https://www.linkedin.com/in/sehej-brar/"
        },

        {
            company: "Otipemisiwak Métis Government",
            role: "Cybersecurity Analyst",
            time: "May 2024 - Sept. 2024",
            desc: "I joined the Otipemisiwak Government as a cybersecurity intern tasked with enhancing digital safety protocols and reducing organizational risk. Over the course of the summer, I authored a comprehensive 54-page security policy, outlining best practices for software maintenance, data protection, and incident response procedures. This document became a foundational guide for both technical teams and leadership.\nBeyond policy development, I also played a key role in understanding and fortifying our digital environment. I meticulously mapped the organization's network infrastructure, gaining a deep understanding of its topology, identifying critical assets, and pinpointing potential vulnerabilities. This process was crucial for enhancing network visibility, improving segmentation strategies, and optimizing the placement of security controls. I also contributed to daily IT operations and user support, troubleshooting technical issues, and providing guidance on secure computing practices using remote control software. This hands-on experience offered valuable insights into end-user behavior and helped refine our security awareness initiatives, ensuring operational continuity while upholding security standards. Furthermore, my role extended to supporting technology procurement, where I assisted in evaluating new systems and software to ensure they met the organization's security requirements and strategic objectives. I also played a part in managing relationships with external technological vendors, conducting due diligence on their security postures, and ensuring that service level agreements aligned with our overall risk mitigation strategies.",
            img: "/f.png",
            color: "bg-[#FDF7F0]"
        },

        {
            company: "Otipemisiwak Métis Government",
            role: "Software Developer",
            time: "Sept. 2024 - Now",
            desc: "After my cybersecurity term, I continued on as a software developer—shifting focus toward internal platforms, workflow automation, and web tooling. I was responsible for building a custom intranet using React, JavaScript, and SPFx, deployed within SharePoint to streamline communication and daily operations for a 400+ person organization. This included designing interactive widgets, dashboard modules, and role-based views for employees and managers.\n\nI also developed and launched an e-commerce website for a partner organization, integrating with their payment and inventory systems. The result was a cleaner user experience and a 2.5× increase in online transactions.\n\nMore recently, I’ve focused on automating repetitive asset management processes. I used Selenium to script asset collection flows—eliminating the need for manual data entry—and used Pandas to clean and normalize datasets for ingestion into AssetWasp, ensuring consistent record-keeping across departments. These tools helped reduce admin overhead and ensured cleaner asset lifecycles from collection to registration.",
            img: "/banner.png",
            color: "bg-[#F1F1F1]"
        },

        {
            company: "Canadian Center of Joining and Welding",
            role: "Software Engineer",
            time: "Sept. 2024 - Now",
            desc: "From January 2025 onwards, I worked as a Software Engineer in a fluid dynamics research lab at the Canadian Center for Welding and Joining, where I designed and developed a real-time measurement and visualization platform using PyQt6. The application was built to interface with a drawer-based experimental system used to measure fluid flow and droplet formation under varying physical conditions. As soon as the drawer was closed, the system automatically began collecting data—calculating parameters like flow rate and sheath velocity on the fly based on sensor readings and drawer status.\nThe platform featured a fully custom GUI with real-time plotting capabilities, allowing researchers to monitor system behavior as experiments ran. I implemented a robust serial communication layer between the GUI and Arduino-based hardware, parsing continuous data streams and filtering out noise in real time. To maintain responsiveness and stability under high-frequency logging, I employed QThreads and Qt’s signal-slot architecture, ensuring that the data acquisition and processing pipeline remained isolated from the main UI thread. The system also handled dynamic status monitoring, automatic start/stop control based on drawer position, and multi-step processing for calculating flow characteristics.\n\nBeyond visualization, I built tools for exporting filtered, structured data to CSV—allowing researchers to conduct post-experiment analysis with minimal manual cleanup. The architecture was modular and extensible, enabling easy integration of new sensors or algorithmic logic down the line. While I supported early exploration of migrating lower-level components to C for direct hardware control, my primary role centered on building a technically sound, multithreaded, and user-focused PyQt6 interface tailored to the needs of experimental fluid dynamics research.",
            img: "/arduino.jpg",
            color: "bg-[#E6F4F1]"
        },
    ]

    let  rots = [4, -2, 1, -4, 1.5]
    rots = [0, 0, 0, 0, 0]
    const yVals = [-20, -10, 0, 10, 20]

    // refs for clean up
    const lenisRef = useRef()
    const ticker = useRef()
    const scroll = useRef()
    const cards = useRef([])

    useEffect(() => {
        cards.current = gsap.utils.toArray(".card")

        const lenis = new Lenis()
        lenisRef.current = lenis
        lenis.on("scroll", ScrollTrigger.update)

        const gsapTicker = (time) => {
            lenis.raf(time * 1000)
        }

        ticker.current = gsapTicker

        gsap.ticker.add(gsapTicker)
        gsap.ticker.lagSmoothing(0)

        cards.current.forEach((card, i) => (
            gsap.set(card, {rotate: rots[i], y: i == 0 ? 0: window.innerHeight, translateY: yVals[i], zIndex: i})
        ))

        const scrollTrigger = ScrollTrigger.create({
            trigger: ".work-exp",
            start: "top top",
            end: () => `+=${window.innerHeight * (cards.current.length)}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            markers:true,
            onUpdate: (self) => {
                const progress = self.progress
                const totalCards = cards.current.length
                const progressPerCard = 1 / (totalCards - 1)
                
                cards.current.forEach((card, index) => {
                    if (index == 0) {return}
                    const cardStart = (index - 1) * progressPerCard
                    let cardProgress = (progress - cardStart) / progressPerCard
                    cardProgress = Math.min(Math.max(cardProgress, 0), 1)

                    let yPos = window.innerHeight * (1 - cardProgress)

                    if (cardProgress === 1 && index < totalCards - 1) {
                        const currProgress = index * progressPerCard

                        if (progress > currProgress) {
                            let flyProgress = (progress - currProgress) / progressPerCard
                            flyProgress = Math.min(Math.max(flyProgress, 0), 1)
 
                            const distanceMultipler = 1 - index * 0.05
                            yPos = -window.innerHeight * 0.025 * distanceMultipler * flyProgress
                        } else {
                            yPos = 0
                        }
                    }

                    gsap.to(card, {
                        y: yPos,
                        duration: 0.1,
                        ease: "none"
                    })
                })
            }
        })

        scroll.current = scrollTrigger

        const handleResize = () => {
            if (lenisRef.current) {
                lenisRef.current.resize();
            }
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)

            if (ticker.current) {
                gsap.ticker.remove(ticker.current);
                ticker.current = null;
            }

            if (scroll.current) {
                scroll.current.kill();
                scroll.current = null;
            }
            
            if (cards.current && cards.current.length > 0) {
                cards.current.forEach(card => {
                    if (card) gsap.killTweensOf(card);
                });
            }

            if (lenisRef.current) {
                lenisRef.current.destroy();
                lenisRef.current = null;
            }
        }

    }, [])

    return (
        <div className="w-screen h-screen">
            <div className='bg-black work-exp flex w-full h-[100vh] relative justify-center items-center'>
                {cardInfo.map((card, i) => (
                    <div key={i} className="card flex absolute h-5/6 w-5/6 border border-[#E0E0E0]">
                        <div className={`w-1/2 p-12 flex flex-col justify-center space-y-4 ${card.color} ${i % 2 === 0 ? '' : 'order-last'}`}>
                            <div className='text-5xl font-semibold'>{card.company}</div>
                            <div className='text-2xl text-gray-600'>{card.time}</div>
                            <div className='text-xl text-gray-700 italic'>{card.role}</div>
                            <div className='text-md text-gray-700 leading-relaxed'>{card.desc}</div>
                            {card.button && (<a href={card.link}><button>{card.button}</button></a>)}
                        </div>

                        <img src={card.img} className={`w-1/2 h-full object-cover ${i % 2 === 0 ? 'order-last' : ''}`}></img>
                    </div>
                ))}  
                <div className="card flex absolute h-5/6 w-5/6 border border-[#E0E0E0]">
                    <div className="w-2/3 p-12 flex flex-col justify-center space-y-4 bg-[#FFF9E6]">
                        <div className='text-5xl font-semibold'>Curious to See More?</div>
                        <div className='text-md text-gray-700 leading-relaxed'>If you’ve made it this far, you might want to check out some of the other things I’ve built.rClick below to explore more projects, experiments, and work I’m proud of.</div>
                        <a href={"www.github.com/sehejb"}><button>See My Projects</button></a>
                    </div>

                    <Contact className="w-1/3 h-full object-cover"/>
                </div>
            </div>

            <div className='bg-black'>
                <hr className="w-11/12 mx-auto justify-center border-gray-700"/>
            </div>

            <div className="bg-black w-full min-h-[50vh]"><Footer/></div>
        </div>
    )
}

export default Cards;