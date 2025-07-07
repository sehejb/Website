import { useState } from "react"

import { CiFolderOn } from "react-icons/ci";

import { FaReact, FaAndroid, FaAngular, FaPython, FaJava, FaJsSquare, FaCss3, FaGitAlt } from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import { BiLogoVisualStudio } from "react-icons/bi";

import { SiAndroidstudio, SiPytorch, SiJunit5, SiMongodb, SiPandas, SiNumpy, SiScikitlearn, SiC, SiNeo4J, SiAssemblyscript } from "react-icons/si";

import { IoLogoFirebase } from "react-icons/io5";

import { RiTailwindCssFill } from "react-icons/ri";

import { TbSdk } from "react-icons/tb";

import { FcScatterPlot } from "react-icons/fc";

import { DiSqllite } from "react-icons/di";

import { PiFileCSharpDuotone } from "react-icons/pi";


function Folder({data}) {
    const [enabled, setEnabled] = useState(false)

    function Enable() {
        setEnabled(!enabled)
    }

    return (
        <div>
            <div onClick={Enable} className="relative flex items-center">
                <CiFolderOn className="h-16 w-16 text-white m-5"></CiFolderOn>
                <h1 className="text-white text-3xl">{data.name}</h1>
            </div>

            {enabled && data.children.map((child, i) => (
                <div key={i} className="flex items-center p-2">
                    {child.icon && <child.icon key={child.icon} className="h-12 w-12 text-white ml-16"/>}
                    <h1 key={child.name} className="text-2xl text-white pl-5">{child.name}</h1>
                </div>    
            ))}
        </div>
    )
}

const AboutMe = () => {
    const folders = [
    {
        name: "Languages",
        type: "Folder",
        children: [
            { name: "Java", type: "File", icon: FaJava },
            { name: "Python", type: "File", icon: FaPython },
            { name: "C", type: "File", icon: SiC },
            { name: "SQL", type: "File", icon: DiSqllite },
            { name: "JavaScript", type: "File", icon: FaJsSquare },
            { name: "CSS", type: "File", icon: FaCss3 },
            { name: "Neo4j", type: "File", icon: SiNeo4J },
            { name: "C#", type: "File", icon: PiFileCSharpDuotone },
            { name: "Assembly", type: "File", icon: SiAssemblyscript }
        ]
    },
    {
        name: "Libraries",
        type: "Folder",
        children: [
            { name: "pandas", type: "File", icon: SiPandas },
            { name: "Firebase SDK", type: "File", icon: TbSdk },
            { name: "MongoDB", type: "File", icon: SiMongodb },
            { name: "NumPy", type: "File", icon: SiNumpy },
            { name: "Scikit-learn", type: "File", icon: SiScikitlearn },
            { name: "Matplotlib", type: "File", icon: FcScatterPlot }
        ]
    },
    {
        name: "Frameworks",
        type: "Folder",
        children: [
            { name: "React", type: "File", icon: FaReact },
            { name: "Firebase", type: "File", icon: IoLogoFirebase },
            { name: "Android SDK", type: "File", icon: FaAndroid },
            { name: "Angular", type: "File", icon: FaAngular },
            { name: "Tailwind CSS", type: "File", icon: RiTailwindCssFill },
            { name: "PyTorch", type: "File", icon: SiPytorch },
            { name: "JUnit", type: "File", icon: SiJunit5 }
        ]
    },
    {
        name: "Developer Tools",
        type: "Folder",
        children: [
            { name: "Git", type: "File", icon: FaGitAlt },
            { name: "VS Code", type: "File", icon: VscVscode },
            { name: "Visual Studio", type: "File", icon: BiLogoVisualStudio },
            { name: "Android Studio", type: "File", icon: SiAndroidstudio }
        ]
    }
]

    return (
        <div className="w-full h-full">
            <div className="w-2/5 h-full flex items-center ml-10">
                <div className="w-2/3 h-[95vh] bg-[#1B1F29] rounded-xl overflow-y-auto">
                    <div className="w-full h-[7vh] bg-[#2F3748] rounded-t-xl flex items-center pl-5 text-3xl">
                        <h1 className="text-[#A3AEC0]">Explorer</h1>
                    </div>
                    {folders.map(folder => (
                        <Folder key={folder.name} data={folder}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutMe;