import SkillBox from "./skill-box";
import LanguageProficiencies from "./language-proficiencies";

const skillSet = [
    "react",
    "nextjs",
    "java",
    "androidstudio",
    "express",
    "cpp",
    "flutter",
    "postgresql",
    "php",
    "csharp",
    "python",
    "tailwindcss",
    "nodejs",
    "mongodb",
    "javascript",
    "html5",
    "css3",
    "bash",
    "git",
    "docker",
    "cmake",
    "c",
    "gradle",
    "dart"
];

export default function SkillsSection() {
    return (
        <div className="w-full bg-black py-8">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl mb-8">
                    Skills
                </h1>

                {/* <div className="flex w-full overflow-hidden flex-nowrap">
                    <div className="flex flex-nowrap flex-none basis-full animate-infinite-scroll space-x-8">
                        {skillSet.map((skill) => <img className="size-12" src={"/icons/" + skill + ".svg"}/>)}
                    </div>
                    <div className="flex flex-nowrap flex-none basis-full animate-infinite-scroll space-x-8" aria-hidden="true">
                        {skillSet.map((skill) => <img className="size-12" src={"/icons/" + skill + ".svg"}/>)}
                    </div>
                </div> */}
         
                {/* <LanguageProficiencies /> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">

                    <SkillBox heading={"Programming"} skills={["cpp", "javascript", "java"]} desc="With a unique blend of algorithmic programming and software development expertise, I build cutting-edge products that showcase technical excellence, creative problem-solving, and robust engineering." />
                    <SkillBox heading={"Web Development"} skills={["nextjs", "react", "tailwindcss"]} desc="I build fast, reliable, and scalable full-stack web applications using robust frameworks, enabling businesses to accelerate innovation, improve customer experiences, and achieve strategic objectives." />
                    <SkillBox heading={"Mobile Development"} skills={["flutter", "dart", "java", "androidstudio"]} desc="With hands on experience with Android SDK and Flutter, I create powerful and portable applications for mobile devices that satisfy user needs." />
                    <SkillBox heading={"Backend Development"} skills={["nextjs", "express"]} desc="As a backend developer, I create scalable and efficient server-side applications, robust database architectures, and seamless API integrations that power fast, secure, and reliable digital experiences." />
                    <SkillBox heading={"Database Management"} skills={["mongodb", "postgresql", "mysql"]} desc="By harnessing the power of SQL and NoSQL databases, I create flexible and high-performance data management systems that support complex applications and drive business success." />
                    {/*<SkillBox heading={"Game Development"} skills={["unity", "csharp", "unrealengine", "cpp"]} desc="Outside of work, I enjoy creating video games, combining art, design, and programming to bring my ideas to life." /> */}
                    <SkillBox heading={"Tools & Technologies"} skills={["git", "bash", "powershell", "docker", "visualstudio", "cmake", "gradle"]} desc="To accelerate development and optimize efficiency, I leverage a range of cutting-edge tools, featuring build automation, containerization, and other expert technologies within my toolkit." />

                   
                </div>

                {/*<div className="grid grid-cols-5 gap-8 p-8 bg-neutral-900 rounded-xl">
                    {skillSet.map((skill) => <img key={skill} className="size-16" src={"/icons/" + skill + ".svg"}/>)}
                </div>*/}
            </div>
        </div>
    );    
}