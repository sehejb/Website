import Cards from './Cards'

const About = () => {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <h1 className="text-center mt-10 text-7xl text-white">About Me </h1>      
            <div className='flex pt-7 gap-x-14 h-full'>
                <div className="w-1/2 h-full p-3">
                    <Cards/>
                </div>

                <div className="flex items-center w-1/2 h-full pr-8">
                    <p className=" text-white text-xl">I'm a third-year Computer Science student with a passion for building clean, intuitive digital experiences. Whether it's crafting modern frontends with React, animating interactions with GSAP, or bringing ideas to life with 3D, I’m driven by the challenge of turning concepts into polished, functional products. Currently, I work as a Software Engineer in a government role, where I’ve built internal tools using SharePoint and modern web frameworks. On the side, I explore personal projects — from custom GUIs to interactive portfolio design — as a way to learn by doing and push my skills further. I’m constantly learning, refining, and building. If you're curious about what I’ve made or want to collaborate, let’s connect.</p>
                </div>
            </div>
            
        </div>
    )
}

export default About;