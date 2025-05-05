import gsap from 'gsap'
import { useEffect, useRef } from 'react'

function Move(ballPosRef, bowlSize) {
    ballPosRef.current.forEach((item) => {
        item['x'] += item['sX']
        item['y'] += item['sY']

        if (item['x'] + 90 > bowlSize[0] || item['x'] < 0) {
            item['sX'] *= -1
        }

        if (item['y'] + 80 > bowlSize[1] || item['y'] < 0) {
            item['sY'] *= -1
        }

        gsap.set(item['el'], {x: Math.round(item['x']), y: Math.round(item['y'])})

        console.log(ballPosRef.current)
    })
} 

// min inclusive, max exclusive
function randomNum(min, max) {
    let random = 0

    while (random == 0) {
        random = Math.random() * (max - min)
    }

    return random
}

function Ball({ballPosRef, img}, bowlSize) {
    const ballRef = useRef()

    useEffect(() => {
        ballPosRef.current.push({x:randomNum(0, bowlSize[0]), y:randomNum(0, bowlSize[1]), sX: randomNum(-6, 6), sY: randomNum(-4, 4), el:ballRef.current})
    }, [])

    return(
        <div id="ball" ref={ballRef} className="absolute w-20 h-20 rounded-full">
            <img src={img} className='h-full w-full object-contain'/>
        </div>
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
    }, [])

    function fn() {
        Move(ballPosRef, bowlSize)
    }

    useEffect(() => {
        gsap.ticker.add(fn)
        return () => gsap.ticker.remove(fn)
    }, [])
    
    return (
        <div className="flex h-full w-full">
            <div ref={bowlRef} className="relative h-full w-full border-white border-2">
                <Ball ballPosRef={ballPosRef} bowlSize={bowlRef} img='/react.png'/>
                <Ball ballPosRef={ballPosRef} img='/pytorch.png'/>
            </div>
        </div>
    )
}

export default Cards;