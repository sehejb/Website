import { useEffect, useRef, useState } from "react"

function AllExperience({oneline=false}) {
    let jobs = [
        {
            company: "Otipemisiwak Métis Government",
            role: "Software Developer",
            time: "Sept. 2024 - Now",
            commit: "777d7f2",
            skills: ["React", "Selenium", "Pandas", "SPFX"],
            desc: "Built a React, JavaScript, and SPFx intranet within SharePoint to streamline communication and daily operations for 400+ users, with interactive widgets and dashboards. Launched an e-commerce website integrated with payment and inventory systems, increasing transactions by 2.5×. Automated asset management workflows using Selenium for data collection and Pandas for cleaning datasets for AssetWasp, reducing manual entry and admin overhead."
        },

        {
            company: "Canadian Center of Joining and Welding",
            role: "Software Engineer",
            time: "Jan. 2025 - Now",
            commit: "248310f",
            skills: ["PyQt6", "C", "Arduino", "C++"],
            desc: "Built a real-time PyQt6 platform for fluid dynamics experiments with Arduino-based sensors, live plotting, and automatic start/stop controls. Used QThreads for multithreaded data processing and robust serial communication to maintain UI responsiveness. Added CSV export tools, designed a modular architecture for new sensors, and explored migrating lower-level components to C for direct hardware control."
        },

        {
            company: "Otipemisiwak Métis Government",
            role: "Cybersecurity Analyst",
            time: "May 2024 - Sept. 2024",
            commit: "1917742",
            skills: ["VLAN", "Software Quality Assurance", "IT Troubleshooting", "Risk Assessments"],
            desc: "Authored a 54-page security policy on software maintenance, data protection, and incident response. Mapped network infrastructure to identify assets and vulnerabilities. Supported IT operations and evaluated new technologies and vendors for security compliance."
        },
    ]

    if (oneline) {jobs = [jobs[0]]}

    return (
        <div className="flex flex-col justify-center p-2 px-5">
            {jobs.map((job, i) => (
                <div key={i} className="w-full h-1/6 bg-[#252930] pt-2 pb-2 rounded-xl">
                    <p className="text-[#CFCE7F] text-md">commit {job.commit}</p>
                    <p className="text-[#499AFF] text-lg">{job.company}</p>
                    <span className="text-[#5DB89C] text-md">{job.role} </span>
                    <span className="text-[#71797B] text-md">| Date: </span>
                    <span className="text-[#B66E4C] text-md">{job.time}</span>
                    <p className="text-white text-md mb-3">{job.desc}</p>
                    <div className="pb-2">
                        {job.skills.map((skill, j) => (
                            <span key={j} className="bg-[#303C4F] rounded-xl border-1 border-[#445B84] text-[#5AA4EE] p-1 mx-1">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

function Help() {
    const help = {
        "ls -exp": "List experience in compact view",
        "ls -la -exp": "List all experience in full detail",

        "cat resume.pdf": "View and download resume",

        "skills --all": "Display all technical skills",
        "skills --lang": "Show programming languages",
        "skills --lib": "Show libraries/tools used",
        "skills --fw": "Show frameworks used",
        "skills --tools": "Show developer tools",

        "help": "Display list of available commands",

        "clear": "Clear this terminal"
    };

    return (
        <div>
            {Object.entries(help).map(([cmd, desc]) => (
                <div key={cmd} className="flex">
                    <span key={cmd} className="text-[#499AFF] text-lg px-7 pt-3 w-[30ch]">{cmd}</span>
                    <span key={desc} className="text-[#71797B] text-lg pt-3">{desc}</span>
                </div>
            ))}
        </div>
    )
}

function DownloadResume() {
    useEffect(() => {
        const link = document.createElement("a")
        link.href = "/Sehej Brar - Resume.pdf"
        link.target = "_blank"
        link.click()
    }, [])

    return (
        <p className="text-lg text-[#5DB89C] pl-3 pt-3">Loading Resume...</p>
    )
}

function ShowSkills(languages = false, libraries = false, frameworks = false, tools = false) {
    return (
        <div className="text-white text-base space-y-4 pl-7 pt-4">
            {languages && 
                <div>
                    <p className="text-[#5DB89C] font-semibold mb-2">Languages</p>
                    <div className="flex flex-wrap">
                    {["Java", "Python", "C", "SQL", "JavaScript", "CSS", "Neo4j", "C#", "Assembly"].map((skill, j) => (
                        <span key={j} className="bg-[#303C4F] rounded-xl border border-[#445B84] text-[#5AA4EE] p-1 mx-1">
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
            }

            {libraries &&
                <div>
                    <p className="text-[#5DB89C] font-semibold mb-2">Libraries</p>
                    <div className="flex flex-wrap">
                    {["pandas", "Firebase SDK", "MongoDB", "NumPy", "Scikit-learn", "Matplotlib"].map((skill, j) => (
                        <span key={j} className="bg-[#303C4F] rounded-xl border border-[#445B84] text-[#5AA4EE] p-1 mx-1">
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
            }

            {frameworks &&
                <div>
                    <p className="text-[#5DB89C] font-semibold mb-2">Frameworks</p>
                    <div className="flex flex-wrap">
                    {["React", "Firebase", "Android SDK", "Angular", "Tailwind CSS", "PyTorch", "JUnit"].map((skill, j) => (
                        <span key={j} className="bg-[#303C4F] rounded-xl border border-[#445B84] text-[#5AA4EE] p-1 mx-1">
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
            }

            {tools && 
                <div>
                    <p className="text-[#5DB89C] font-semibold mb-2">Developer Tools</p>
                    <div className="flex flex-wrap">
                    {["Git", "VS Code", "Visual Studio", "Android Studio"].map((skill, j) => (
                        <span key={j} className="bg-[#303C4F] rounded-xl border border-[#445B84] text-[#5AA4EE] p-1 mx-1">
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
            }
        </div>
    )
}

const ExperienceTerminal = () => {

    const prompt = <p className="text-lg text-[#5DB89C] pl-3 pt-3">sehej@portfolio:~/experience</p>
    
    const [history, setHistory] = useState([
        {pr: prompt, cmd: "$ git log --oneline --experience", result: <AllExperience oneline={true}/> },
        {pr: prompt, cmd: "$ git help --all", result: <Help/>}
    ])

    const commands = {
        "ls -exp": <AllExperience oneline={true} />,
        "ls -la -exp": <AllExperience />,

        "cat resume.pdf": <DownloadResume />,

        "skills --all": <ShowSkills languages={true} libraries={true} frameworks={true} tools={true} />,
        "skills --lang": <ShowSkills languages={true} />,
        "skills --lib": <ShowSkills libraries={true} />,
        "skills --fw": <ShowSkills frameworks={true} />,
        "skills --tools": <ShowSkills tools={true} />,

        // "whoami": <AboutMe />,

        // connect: <Connect/>

        "help": <Help />,

        "clear": <Clear/>
    };

    const [input, setInput] = useState('')
    const endTerminal = useRef()

    let inputRef = useRef()

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1
    }

    function Clear() {
        setHistory([{}])
    }

    const callbackFunction = ([entries]) => {
        if (entries.isIntersecting) {
            inputRef.current.focus()
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (inputRef.current) {observer.observe(inputRef.current)}

        return () => {
            if (inputRef.current) {observer.unobserve(inputRef.current)}
        }
        
    }, [inputRef])

    useEffect(() => {
        endTerminal.current.scrollTop = endTerminal.current.scrollHeight
    }, [history])

    const addResult = (event) => {
        if (event.key == "Enter") {
            const inp = inputRef.current.value.toLowerCase()
            
            if (commands[inp]) {
                setHistory(prev => 
                    [...prev, {
                        pr: prompt,
                        cmd: `$ ${inp}`, 
                        result: commands[inp]
                    }]
                )
            } else {
                setHistory(prev => 
                    [...prev, {
                        pr: prompt,
                        cmd: `$ ${inp}`, 
                        result: <p className="text-lg pt-3 px-7 text-red-700">Error: Command Not Found</p>
                    }]
                )
            }
            
            setInput('')
        }
    }

    return (
        <div id="terminal" ref={endTerminal} className="w-[92vw] h-[87vh] bg-[#2A2C34] rounded-2xl font-mono overflow-y-auto">
            <div className="w-full h-[6vh] bg-[#22262D] rounded-t-2xl flex justify-center items-center">
                <p className="text-white text-xl">sehej@portfolio:~/experience</p>
            </div>

            <div id="results" className="overflow-y-auto">
                {history.map((line, i) => (
                    <div key={i}>
                        <div>{line.pr}</div>
                        <p className="text-lg text-white pl-3">{line.cmd}</p>
                        <div>{line.result}</div>
                    </div>
                ))}
            </div>

            <p className="text-lg text-[#5DB89C] pl-3 pt-5">sehej@portfolio:~/experience</p>
            <span className="text-lg text-white pl-3">$ </span>
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={addResult} type="text" className=" w-11/12 text-white text-lg bg-transparent border-collapse outline-none"/>
        </div>
    )
}

export default ExperienceTerminal;