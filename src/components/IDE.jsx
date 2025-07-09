
const IDE = () => {
    const navBar = ["File", "Edit", "Selection", "View", "···"]
    const terminalNav = ["PROBLEMS", "OUTPUT", "CONSOLE", "TERMINAL", "PORTS"]
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
    const gitPushOutput = ["PS C:\\Users\\sehej\\Website> git push origin main",
                            "Enumerating objects: 9, done.",
                            "Counting objects: 100% (9/9), done.",
                            "Delta compression using up to 8 threads",
                            "Compressing objects: 100% (5/5), done.",
                            "Writing objects: 100% (5/5), 1.48 KiB | 379.00 KiB/s, done.",
                            "Total 5 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)",
                            "remote: Resolving deltas: 100% (3/3), completed with 3 local objects.",
                            "To https://github.com/sehejb/Website.git",
                            "   2c02545..9fea7b3  main -> main",
                            "PS C:\\Users\\sehej\\Website>"];

    return (
        <div className="bg-[#292C34] w-[95%] h-[95vh] rounded-xl">
            <div className="flex flex-col bg-[#22252B] w-full h-[10vh] pt-2 rounded-t-xl">
                <div className="w-full h-1/2 flex">
                    <ul className="w-1/3 h-full items-center justify-center flex">
                        {navBar.map((nav, i) => (
                            <ul className="text-[#838896] text-2xl mx-5" key={i}>{nav}</ul>
                        ))}
                    </ul>

                    <div className="w-5/12 h-full flex items-center justify-center border-[#44474F] bg-[#2D3036] rounded-lg">
                        <p className="text-3xl text-[#838896]">About Me</p>
                    </div>

                    <div className="w-1/4 h-full text-[#838896] text-3xl flex justify-end pr-6 space-x-10">
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

            <p className="text-[#ABACAD] pl-5 w-full h-[3vh]">{'src > components > AboutMe.jsx > AboutMe'}</p>
            
           <div className="w-full h-[55vh] overflow-auto text-sm rounded-md">
                {descs.map((desc, i) => (
                    <div key={i} className="flex">
                        <div className="w-12 text-lg font-mono bg-[#292C34] text-gray-500 text-right pr-4 select-none border-r border-gray-700">
                            {i + 1}
                        </div>

                        <div className="flex-1 text-lg pl-4 font-mono text-[#d4d4d4] whitespace-pre-wrap break-words">
                            {desc}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full h-[25vh] border-t-1 border-[#484A4F] p-3 pl-3">
                <div className="flex w-full h-[2vh] flex-row font-mono gap-x-5">
                    {terminalNav.map(term => (
                        <p key={term} className="text-[#9B9DA0] text-sm">{term}</p>
                    ))}
                </div>
                
                <div className="pt-3 w-full h-[23vh] overflow-y-auto font-mono">
                    {gitPushOutput.map(command => (
                        <p key={command} className="text-[#C2CCC2]">{command}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IDE;