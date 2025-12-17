
export default function SkillBox({heading, skills, desc}) {
    return (
        <div className="relative flex flex-col p-4 h-64 bg-neutral-900 rounded-xl hover:scale-105 transition duration-200 ease-out overflow-auto"> 
            <h1 className="text-center">
                {heading}
            </h1>
            <div className="flex justify-center py-4 gap-2">
                {skills.map((skill) => <img className="size-8" src={"/icons/" + skill + ".svg"} key={skill}/>)}
            </div>
            <p className="text-sm p-4">{desc}</p>
        </div>
    );
}