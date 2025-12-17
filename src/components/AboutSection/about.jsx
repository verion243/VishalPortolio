'use-client';
import Image from "next/image";
import Revealer from "../ui/revealer";


export default function AboutSection() {
    return (
        <div className="w-full bg-neutral-950 pt-8">
            {/* <h1 className="text-4xl text-center mb-8">
                About
            </h1> */}
            <div className="flex flex-col items-center">
                <Revealer>
                    <Image
                        src="/images/Vishal.jpg"
                        alt="Vishal"
                        width={900}
                        height={1600}
                        className="relative rounded-full w-60 h-60 object-cover"
                    />
                </Revealer>
                <Revealer>
                    <p className="w-full max-w-xl my-8 px-4 font-serif">
                        Hi, I’m Vishal Kumar, a developer with a deep-rooted passion for software engineering. Having completed both my  Master of Computer Applications(MCA) and  Bachelor of Computer Applications(BCA) (College of Commerce, Arts & Science, Patna
                        -Patliputra University), I’ve spent the last 5+ years turning complex ideas into functional products like Skyte Messenger and ControlBoard. Whether it’s architecting a full-stack web app or crafting a cross-platform mobile experience with Flutter, I focus on performance and scalability. My academic background gives me the 'why' (architecture & algorithms), and my project experience gives me the 'how'.
                    </p>
                </Revealer>

            </div>
        </div>
    );    
}