import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Cards =() => {
    const descs = ["Old Card", "Two Card", "Three Card", "Four Card", "New Card"]
    const rots = [4, -2, 1, -4, 1.5]
    const yVals = [-20, -10, 0, 10, 20]

    useEffect(() => {
        const cards = gsap.utils.toArray(".card")

        cards.forEach((card, i) => (
            gsap.set(card, {rotate: rots[i], translateY: yVals[i], zIndex: i, position: "absolute"})
        ))

        cards.forEach((card, i) => {
            if (i == 0) {return}
            gsap.to(card, {
                y: 500000,
                opacity: 0,
                scrollTrigger: {
                    trigger: card,
                    scrub: 1,
                    start: "top top",
                    end: "bottom center"
                }
            })
        })
    }, [])

    return (
        <div className="work-exp flex w-full h-full relative justify-center items-center">        
            {descs.map((item, i) => (
                <div key={i} className="card flex absolute h-5/6 w-5/6 bg-white rounded-3xl items-center">
                    {item}
                </div>
            ))}
            <div style={{ height: "2500px" }} />
        </div>
    )
}

export default Cards;