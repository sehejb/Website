
const IDE = () => {
    const navBar = ["File", "Edit", "Selection", "View", "···"]

    return (
        <div className="bg-[#292C34] w-[95%] h-[95vh] rounded-xl">
            <div className="flex bg-[#22252B] w-full h-[12vh] pt-2 rounded-t-xl">
                <ul className="w-1/3 h-1/2 items-center justify-center flex">
                    {navBar.map((nav, i) => (
                        <ul className="text-white text-2xl mx-5" key={i}>{nav}</ul>
                    ))}
                </ul>

                <div className="w-2/5 h-1/2 flex items-center justify-center border-[#44474F] bg-[#2D3036] rounded-lg">
                    <p className="text-3xl text-white">About Me</p>
                </div>
                
            </div>
        </div>
    )
}

export default IDE;