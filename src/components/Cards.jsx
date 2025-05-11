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
            gsap.set(card, {y: window.innerHeight, rotate: rots[i], translateY: yVals[i], zIndex: i})
        ))
    }, [])

    return (
        <div className="flex w-full h-full relative justify-center items-center overflow-hidden">
            {descs.map((item, i) => (
                <div key={i} className="card flex absolute h-3/4 w-3/4 bg-white rounded-3xl items-center">
                    {item}
                </div>
            ))}
        </div>
    )
}

export default Cards;