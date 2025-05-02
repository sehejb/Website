import Cards from './Cards'

const About = () => {
    return (
        <div className="flex flex-col h-1/3">
            <h1 className="mt-10 text-center text-8xl text-white">About Me </h1>
            <p className="text-white p-14 text-4xl">I'm a third-year Computer Science student with a passion for building clean, intuitive digital experiences. Whether it's crafting modern frontends with React, animating interactions with GSAP, or bringing ideas to life with 3D, I’m driven by the challenge of turning concepts into polished, functional products. Currently, I work as a Software Engineer in a government role, where I’ve built internal tools using SharePoint and modern web frameworks. On the side, I explore personal projects — from custom GUIs to interactive portfolio design — as a way to learn by doing and push my skills further. I’m constantly learning, refining, and building. If you're curious about what I’ve made or want to collaborate, let’s connect.</p>
            <Cards/>
        </div>
    )
}

export default About;