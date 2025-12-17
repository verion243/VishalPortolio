"use client";
import { motion } from "framer-motion";

export default function Revealer({children}) {
    return (
        <motion.div className="transition duration-500 ease-out relative overflow-hidden" initial={{ x: 100, scale: 0, opacity: 0 }} whileInView={{ x: 0, scale: 1, opacity: 1 }} viewport={{once: true}}>
            {children}
        </motion.div>
    );
}