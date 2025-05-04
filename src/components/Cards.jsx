import gsap from 'gsap'
import { useEffect, useRef } from 'react'

function Move(ballPosRef, bowlSize) {
    ballPosRef.current.forEach((item) => {
        item['x'] += item['sX']
        item['y'] += item['sY']

        if (item['x'] + 80 < bowlSize[0] || item['x'] < 0) {
            item['sX'] *= -1
        }

        if (item['y'] + 80 > bowlSize[1] || item['y'] < 0) {
            item['sY'] *= -1
        }

        gsap.set(item['el'], {x: item['x'], y: item['y']})
    })
}

function Ball({ballPosRef}) {
    const ballRef = useRef()

    useEffect(() => {
        ballPosRef.current.push({x:0, y:0, sX:6, sY:8, el:ballRef.current})
    }, [])

    return(
        <div id="ball" ref={ballRef} className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full"></div>
    )
}

const Cards = () => {
    const bowlRef = useRef()

    const ballPosRef = useRef([])
    let bowlSize = []

    useEffect(() => {
        const size = bowlRef.current.getBoundingClientRect()
        bowlSize.push(size['width'])
        bowlSize.push(size['height'])
    })

    useEffect(() => {
        gsap.ticker.add(() => Move(ballPosRef, bowlSize))
        return () => gsap.ticker.remove(() => Move(ballPosRef, bowlSize))
    }, [])
    
    return (
        <div className="flex h-full w-full justify-center">
            <div ref={bowlRef} className="justify-center relative h-full w-full border-white">
                <Ball ballPosRef={ballPosRef}/>
            </div>
        </div>
    )
}

export default Cards;