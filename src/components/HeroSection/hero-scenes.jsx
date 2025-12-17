import { connection } from "next/server";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { BackgroundLines } from "../ui/background-lines";
import { Suspense } from "react";
import { HeroSceneCommonPart } from "./common-part";


export async function HeroSection () {
    await connection();
    const rnum = Math.random();

    return (
        <Suspense fallback={<BackgroundLines/>} > 
            {(rnum < 0.33) ? <HeroLines/> : ((rnum < 0.66) ? <HeroBeams/> : <HeroDot/>)}
        </Suspense>
    );
}


export function HeroLines () {
    return (
        <BackgroundLines className="relative flex items-center justify-center w-full h-svh flex-col px-4">

            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Vishal Kumar<br/>
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-green-500 via-lime-500 to-cyan-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        <span className="">Software Developer</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-green-500 via-lime-500 to-cyan-500">
                        <span className="">Software Developer</span>
                    </div>
                </div>
            </h2>

            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                Transforming complexity into simplicity, <br/> one algorithm at a time.
            </p>

            <HeroSceneCommonPart />


        </BackgroundLines>
    );
}




export function HeroBeams () {
    return (
        <BackgroundBeamsWithCollision className="relative flex items-center justify-center w-full h-svh flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Vishal Kumar<br/>
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        <span className="">Software Developer</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                        <span className="">Software Developer</span>
                    </div>
                </div>
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                Solving real world problems <br/> with innovative software solutions.
            </p>

            <HeroSceneCommonPart />
        </BackgroundBeamsWithCollision>
    );
}




export function HeroDot() {
    return (
        <div className="flex h-svh w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex-col items-center justify-center px-4">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Vishal Kumar<br/>
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-cyan-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        <span className="">Software Developer</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-orange-500 via-yellow-500 to-cyan-500">
                        <span className="">Software Developer</span>
                    </div>
                </div>
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                Transforming ideas into functional reality.
            </p>

            <HeroSceneCommonPart />

        </div>
    );
  }