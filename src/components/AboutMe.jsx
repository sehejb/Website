import { useState } from "react"
import { CiFolderOn } from "react-icons/ci";

function Folder({data}) {
    const [enabled, setEnabled] = useState(false)

    function Enable() {
        setEnabled(!enabled)
    }

    return (
        <div>
            <div onClick={Enable} className="flex flex-row items-center">
                <CiFolderOn className="h-16 w-16 text-white m-5"></CiFolderOn>
                <h1 className="text-white text-3xl items-center">{data.name}</h1>
            </div>

            {enabled && data.children.map(child => (
                <h1 key={child.name} className="text-2xl text-white p-5">{child.name}</h1>
            ))}
        </div>
    )
}

const AboutMe = () => {
    const folders = [
        {name: "Languages",
        type: "Folder",
        children: [{name: "React", type: "File"}]},
        
        {name: "Libraries",
        type: "Folder",
        children: [{name: "pandas", type: "File"}]},
        
        {name: "Frameworks",
        type: "Folder",
        children: [{name: "React", type: "File"}]},
    ]
    return (
        <div className="w-full h-full">
            <div className="w-2/5 h-full flex items-center justify-center">
                <div className="w-5/6 h-[95vh] bg-[#1B1F29] rounded-xl">
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