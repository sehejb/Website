import { SiGithub, SiLinkedin, SiMailboxdotorg} from 'react-icons/si';

const Footer = () => {
    return (
        <div className="bg-black w-full h-full ">
            <h1 className="p-5 text-5xl text-white text-center">Thank You for Visiting</h1>
            <div className='bg-black w-full h-full flex'>
                <div className="w-1/2 h-full flex flex-col p-7">
                    <h2 className="text-white text-4xl">Connect With Me!</h2>
                    
                    <a className='flex flex-row' href="https://github.com/sehejb" target="_blank" rel="noopener noreferrer">
                        <SiGithub className="h-16 w-16 text-gray-600 m-7"/>
                        <div className="flex h-23 flex-col justify-center">
                            <p className='text-white text-2xl'>Github</p>
                            <p className='text-white'>See More of My Projects</p>
                        </div>
                    </a>

                    <a className='flex flex-row' href="https://www.linkedin.com/in/sehej-brar/" target="_blank" rel="noopener noreferrer">
                        <SiLinkedin className="h-16 w-16 text-blue-600 m-7"/>
                        <div className="flex h-23 flex-col justify-center">
                            <p className='text-white text-2xl'>LinkedIn</p>
                            <p className='text-white'>Let's Connect</p>
                        </div>
                    </a>

                    <a className='flex flex-row' href="mailto:email" target="_blank" rel="noopener noreferrer">
                        <SiMailboxdotorg className="h-16 w-16 text-white m-7"/>
                        <div className="flex h-23 flex-col justify-center">
                            <p className='text-white text-2xl'>Mail</p>
                            <p className='text-white'>email here</p>
                        </div>
                    </a>
                </div>

                <div className="w-1/2 h-full bg-black">
                    <h1 className='text-4xl text-white'>Recent Commits</h1>
                    {/* TODO: small cards here basically just having commit, time, message, hash, small card type almost like ios notifications */}
                </div>
            </div>
        </div>
    )
}

export default Footer