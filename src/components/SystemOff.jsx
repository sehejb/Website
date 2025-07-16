
const SystemOff = () => {
    const services = ["portfolio.service", "experience.service", "projects.service", "skills.service"]
    return (
        <div className="w-full h-full font-mono">
            <h1 className="text-3xl text-white flex justify-center">Shutting down sehej-brar.dev...</h1>
            <div className="w-full h-full flex">
                <div className="w-1/2 h-full items-start justify-start">
                    <p className="text-2xl text-white flex justify-center pt-3">Stopping Services...</p>
                    <ul className="list-none text-white text-xl pl-7 pt-2 space-y-5 my-4">
                        {services.map(serv => (
                            <div key={serv} className="flex flex-row">
                                <li className="w-[25ch]">{serv}</li>
                                <div className="ml-10 h-[28px] w-full flex bg-white"/>
                            </div>
                        ))}
                    </ul>
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-mono text-white text-xl m-7">Power off? [Y/N]    Y</p>
                        <p className="font-mono text-green-600 text-xl m-7">Process Completed.</p>
                    </div>
                </div>

                <div className="w-1/2 h-full">
                    <h1 className="text-2xl text-white justify-center pt-3 flex">Want to Boot Up a Conversation?</h1>
                </div>
            </div>
        </div>
    )
}

export default SystemOff;