
const IDE = () => {
    const navBar = ["File", "Edit", "Selection", "View", "···"]
    const tabs = ["index.html", "AboutMe.jsx", "main.jsx"]
    const descs = ["function AboutMe() {",
                    '  const name = "Sehej Brar";',
                    '  const education = "3rd Year Computer Science Student";',
                    '  const focus = ["React", "GSAP", "3D Experiences"];',
                    "",
                    "  const currentJob = {",
                    '    title: "Software Engineer",',
                    '    type: "Government Role",',
                    '    stack: ["SharePoint", "Modern Web Frameworks"]',
                    "  };",
                    "",
                    '  const projects = ["Custom GUIs", "Interactive Portfolio Designs"];',
                    '  const mindset = "Always learning, refining, and building";',
                    "",
                    "  function connect() {",
                    '    return "Let\'s connect!";',
                    "  }",
                    "",
                    "  return { name, education, focus, currentJob, projects, mindset, connect };",
                    "}"
                ];

    return (
        <div className="bg-[#292C34] w-[95%] h-[95vh] rounded-xl">
            <div className="flex flex-col bg-[#22252B] w-full h-[12vh] pt-2 rounded-t-xl">
                <div className="w-full h-1/2 flex">
                    <ul className="w-1/3 h-full items-center justify-center flex">
                        {navBar.map((nav, i) => (
                            <ul className="text-[#838896] text-2xl mx-5" key={i}>{nav}</ul>
                        ))}
                    </ul>

                    <div className="w-5/12 h-full flex items-center justify-center border-[#44474F] bg-[#2D3036] rounded-lg">
                        <p className="text-3xl text-[#838896]">About Me</p>
                    </div>

                    <div class="w-1/4 h-full text-[#838896] text-3xl flex justify-end pr-6 space-x-10">
                        <button>&#x2013;</button>
                        <button>&#x25A1;</button>
                        <button>&#x2715;</button>
                    </div>
                </div>

                <div className="h-1/2 flex items-end">
                    {tabs.map((tab, i) => (
                        <button key={i} className="text-[#7D7F85] hover:bg-[#292C34] text-xl border-[#181A1F] border-r-1 p-1 px-10">{tab}</button>
                    ))}
                </div>
            </div>
            <p className="text-[#ABACAD] pl-5">{'src > components > AboutMe.jsx > AboutMe'}</p>
            
           <div className="overflow-auto w-full h-[83vh] font-mono text-sm rounded-md">
                {descs.map((desc, i) => (
                    <div key={i} className="flex">
                        <div className="w-12 text-lg bg-[#292C34] text-gray-500 text-right pr-4 select-none border-r border-gray-700">
                            {i + 1}
                        </div>

                        <div className="flex-1 text-lg pl-4 text-[#d4d4d4] whitespace-pre-wrap break-words">
                            {desc}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default IDE;