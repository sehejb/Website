
function AllExperience(oneline=false) {
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
                <div key={i} className="w-full h-1/6 bg-[#252930] p-2 rounded-xl mb-3">
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

const ExperienceTerminal = () => {

    const help = {
        "about": "Show about me information",
        "experience": "List work and project experience",
        "projects": "Display personal projects",
        "skills": "List technical skills",
        "contact": "Show contact information"
    }

    return (
        <div className="w-[98vw] h-[95vh] bg-[#2A2C34] rounded-2xl font-mono overflow-y-auto">
            <div className="w-full h-[6vh] bg-[#22262D] rounded-t-2xl flex justify-center items-center">
                <p className="text-white text-xl">sehej@portfolio:~/experience</p>
            </div>

            <p className="text-lg text-[#5DB89C] pl-3 pt-3">sehej@portfolio:~/experience</p>
            <p className="text-lg text-white pl-3">$ git log --oneline --experience</p>
            <AllExperience oneline={true}/>

            <p className="text-lg text-[#5DB89C] pl-3 pt-3">sehej@portfolio:~/experience</p>
            <p className="text-lg text-white pl-3">$ git help --all</p>

            {Object.entries(help).map(([cmd, desc]) => (
                <p id={cmd} className="text-white text-2xl">{cmd}</p>
            ))}
            
        </div>
    )
}

export default ExperienceTerminal;