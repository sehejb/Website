import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Cards =() => {
    const descs = ["Old Card", "Two Card", "Three Card", "Four Card", "New Card"]
    const rots = [4, -2, 1, -4, 1.5]
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
            gsap.set(card, {rotate: rots[i], y: window.innerHeight, translateY: yVals[i], zIndex: cards.current.length - i})
        ))

        const scrollTrigger = ScrollTrigger.create({
            trigger: ".work-exp",
            start: "top top",
            end: () => `+=${window.innerHeight * cards.current.length}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            markers:true,
            onUpdate: (self) => {
                const progress = self.progress
                const totalCards = cards.current.length
                const progressPerCard = 1 / totalCards
                
                cards.current.forEach((card, index) => {
                    const cardStart = index * progressPerCard
                    let cardProgress = (progress - cardStart) / progressPerCard
                    cardProgress = Math.min(Math.max(cardProgress, 0), 1)

                    let yPos = window.innerHeight * (1 - cardProgress)
                    let xPos = 0

                    if (cardProgress === 1 && index < totalCards - 1) {
                        const currProgress = (index + 1) * progressPerCard

                        if (progress > currProgress) {
                            let flyProgress = (progress - currProgress) / progressPerCard
                            flyProgress = Math.min(Math.max(flyProgress, 0), 1)
 
                            const distanceMultipler = 1 - index * 0.1
                            xPos = -window.innerWidth * 0.4 * distanceMultipler * flyProgress
                            yPos = -window.innerHeight * 0.4 * distanceMultipler * flyProgress
                        }
                    }

                    gsap.to(card, {
                        y: yPos,
                        x: xPos,
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
                lenisRef.current.destroy(); // Clean up Lenis instance
                lenisRef.current = null;
            }
        }

    }, [])

    return (
        <div className='work-exp flex w-full h-full relative justify-center items-center overflow-hidden'>
            {/* {descs.map((item, i) => (
                <div key={i} className="card flex absolute h-5/6 w-5/6 bg-green-600 rounded-3xl items-center">
                    {item}
                </div>
            ))} */}
            <div className='card absolute h-5/6 w-5/6 bg-green-600 rounded-3xl items-center will-change-transform'>1</div>
            <div className='card absolute h-5/6 w-5/6 bg-green-600 rounded-3xl items-center will-change-transform'>2</div>
            <div className='card absolute h-5/6 w-5/6 bg-green-600 rounded-3xl items-center will-change-transform'>3</div>
            <div className='card absolute h-5/6 w-5/6 bg-green-600 rounded-3xl items-center will-change-transform'>4</div>
            <div className='card absolute h-5/6 w-5/6 bg-green-600 rounded-3xl items-center will-change-transform'>5</div>
        </div>
    )
}

export default Cards;