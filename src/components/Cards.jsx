import gsap from 'gsap'
import { useEffect, useRef } from 'react'

let ballPos = []
let bowlSize = []

function Move(time, deltaTime, frame) {
    ballPos.forEach((item) => {

        item['x'] += 1
        item['y'] += 1
        gsap.set(item['el'], {x: item['x'], y: item['y']})
    })
}

function Ball() {
    const ballRef = useRef()

    useEffect(() => {
        const size = ballRef.current.getBoundingClientRect()

        ballPos.push({x:size['x'], y:size['y'], sX:1, sY:1, el:ballRef.current})
    }, [])

    return(
        <div id="ball" ref={ballRef} className="w-10 h-10 bg-white rounded-full"></div>
    )
}

const Cards = () => {
    const bowlRef = useRef()

    useEffect(() => {
        size = bowlRef.current.getBoundingClientRect()
        bowlSize.push(size['x'])
        bowlSize.push(size['y'])
    })

    useEffect(() => {
        gsap.ticker.add(Move)
        return () => gsap.ticker.remove(Move)
    }, [])
    
    return (
        <div className="flex h-full w-full justify-center">
            <div className="justify-center h-full w-full p-[1px] rounded-full border-white overflow-hidden">
                <div ref={bowlRef} className='w-full h-full'>
                    <Ball/>
                </div>
            </div>
        </div>
    )
}

export default Cards;