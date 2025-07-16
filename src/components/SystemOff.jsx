
const SystemOff = () => {
    return (
        <div className="w-full h-full font-mono">
            <h1 className="text-3xl text-white flex justify-center">Shutting down sehej-brar.dev...</h1>
            <div className="w-1/2 h-full">
                <p className="text-2xl text-white flex justify-center pt-3">Stopping Services...</p>
                <ul className="list-none text-white text-xl">
                    <li>portfolio.service</li>
                    <li>experience.service</li>
                    <li>projects.service</li>
                    <li>skills.service</li>
                </ul>
            </div>
        </div>
    )
}

export default SystemOff;