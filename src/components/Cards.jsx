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

function Ball({ballPosRef, img}) {
    const ballRef = useRef()

    useEffect(() => {
        ballPosRef.current.push({x:0, y:0, sX:100, sY:0.5, el:ballRef.current})
    }, [])

    return(
        <div id="ball" ref={ballRef} className="absolute w-20 h-20 border-white rounded-full">
            <img src={img} />
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
        <div className="flex h-full w-full justify-center">
            <div ref={bowlRef} className="justify-center relative h-full w-full border-white border-2">
                <Ball ballPosRef={ballPosRef} img='/react.png'/>
            </div>
        </div>
    )
}

export default Cards;