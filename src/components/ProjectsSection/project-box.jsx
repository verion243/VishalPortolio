import Image from "next/image";
import Link from "next/link";

export default function ProjectBox({name, img, url, desc, skills}) {
    return (
        <Link href={url} target="_blank" className="relative flex flex-col p-4 h-80 bg-neutral-900 rounded-xl hover:scale-105 transition duration-200 ease-out overflow-auto"> 
            <Image 
                src={img}
                width={200}
                height={200}
                alt={name}
                className="rounded-md w-auto h-48 object-contain"
            />
            <div className="flex justify-between">
                <h1 className="text-center text-sm font-bold pt-4">
                    {name}
                </h1>
                <div className="flex justify-center py-2 gap-2">
                    {skills.map((skill) => <img className="size-6" src={"/icons/" + skill + ".svg"} key={skill}/>)}
                </div>

            </div>
            
            <p className="text-xs pt-4">{desc}</p>
        </Link>
    );
}