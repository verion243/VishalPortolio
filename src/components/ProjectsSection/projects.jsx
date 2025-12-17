import ProjectBox from "./project-box";

export default function ProjectsSection() {
    return (
        <div className="w-full bg-neutral-950 pt-8">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl pb-8">
                    Projects
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    <ProjectBox name="ControlBoard" img="/images/controlboard.jpg" url="https://github.com/Bikram-Kumar/ControlBoard" desc="A PC keyboard for Android with all keys." skills={["java", "gradle", "androidstudio", "bash"]} />
                    <ProjectBox name="Skyte Messenger" img="/images/SkyteLogo.png" url="https://github.com/Bikram-Kumar/Skyte" desc="A realtime chatting app" skills={["javascript", "express", "react", "mongodb"]} />
                    <ProjectBox name="Fooduck" img="/images/fooduck.png" url="https://github.com/Bikram-Kumar/fooduck" desc="A cross-platform app to manage and find food recipes." skills={["flutter", "dart"]} />
                    <ProjectBox name="Bad Apple" img="/images/bad-apple.png" url="https://github.com/Bikram-Kumar/BadAppleWithMazes" desc="Render of Bad Apple With Mazes" skills={["html5", "css3", "javascript"]} />
                    <ProjectBox name="Netflix Bot" img="/icons/python.svg" url="https://github.com/Bikram-Kumar/NetflixBot" desc="A chatbot that tells you about Netflix shows." skills={["python"]} />
                    <ProjectBox name="Cube Dash" img="/images/cube-dash.jpeg" url="https://bikramkumar.itch.io/cube-dash" desc="A 3D runner game" skills={["csharp", "unity"]} />
                </div>

            </div>
        </div>
    
    );    
}