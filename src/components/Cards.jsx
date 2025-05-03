import gsap from 'gsap'
import { useEffect, useRef } from 'react'

let ballPos = []

function Move(time, deltaTime, frame) {
    ballPos.map((item) => {
        item['x'] += 1
        item['y'] += 1
        gsap.set(item['el'], {x: item['x'], y: item['y']})
    })
}

function Ball() {
    const ballRef = useRef()

    useEffect(() => {
        const size = ballRef.current.getBoundingClientRect()

        ballPos.push({x:size['x'], y:size['y'], el:ballRef.current})
    }, [])

    return(
        <div id="ball" ref={ballRef} className="w-10 h-10 bg-white rounded-full"></div>
    )
}

const Cards = () => {
    const bowlRef = useRef()

    useEffect(() => {
        gsap.ticker.add(Move)
        return () => gsap.ticker.remove(Move)
    }, [])
    
    return (
        <div className="flex h-full w-full justify-center">
            <div className="justify-center h-full w-full p-[1px] bg-white rounded-full">
                <div ref={bowlRef} className="justify-center h-full w-full bg-black rounded-full overflow-hidden">
                    <Ball/>
                </div>
            </div>
        </div>
    )
}

export default Cards;