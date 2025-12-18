import ProjectBox from "./project-box";

export default function ProjectsSection() {
    return (
        <div className="w-full bg-neutral-950 pt-8">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl pb-8">
                    Projects
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    <ProjectBox name="ControlBoard" img="/images/controlboard.jpg" url="https://github.com/verion243/ControlBoard" desc="A PC keyboard for Android with all keys." skills={["java", "gradle", "androidstudio", "bash"]} />
                    <ProjectBox name="Skytechat" img="/images/SkyteLogo.png" url="https://github.com/verion243/skytechat" desc="A realtime chatting app" skills={["javascript", "express", "react", "mongodb"]} />
                    <ProjectBox name="Bad Apple" img="/images/bad-apple.png" url="https://github.com/verion243/BadApple" desc="Render of Bad Apple With Mazes" skills={["html5", "css3", "javascript"]} />
                </div>

            </div>
        </div>
    
    );    
}