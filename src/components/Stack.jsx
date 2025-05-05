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
    })
} 

// min inclusive, max exclusive
function randomNum(min, max) {
    let random = 0
    let epsilon = 0.5

    while (Math.abs(random) < epsilon) {
        random = Math.random() * (max - min)
    }

    return random
}

function Ball({ballPosRef, bowlSize, img, docs}) {
    const ballRef = useRef()

    useEffect(() => {
        ballPosRef.current.push({x:randomNum(0, bowlSize[0] - 100), y:randomNum(0, bowlSize[1] - 100), sX: randomNum(-6, 6), sY: randomNum(-4, 4), el:ballRef.current})
    }, [])

    return(
        <div id="ball" ref={ballRef} className="absolute w-20 h-20 rounded-full">
            <a href={docs}>
                <img src={img} className='h-full w-full object-contain'/>
            </a>
        </div>
    )
}

const Stack = () => {
    const bowlRef = useRef()

    const ballPosRef = useRef([])
    let bowlSize = []

    const links = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        "/risc-v.png"
    ]

    const docs = [
        "https://docs.oracle.com/en/java/",
        "https://en.cppreference.com/w/c/language",
        "https://docs.python.org/3/",
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "https://react.dev/learn",
        "https://dev.mysql.com/doc/",
        "https://www.mongodb.com/docs/",
        "https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16",
        "https://firebase.google.com/docs",
        "http://tailwindcss.com/docs/",
        "https://github.com/riscv/riscv-isa-manual"
    ]

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
            <div ref={bowlRef} className="relative h-full w-full border-white">
                {links.map((item, i) => (
                    <Ball key={i} ballPosRef={ballPosRef} bowlSize={bowlSize} img={item} docs={docs[i]}/>
                ))}
            </div>
        </div>
    )
}

export default Stack;