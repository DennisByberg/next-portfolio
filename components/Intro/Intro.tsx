"use client";

import DennisPNG from "@/public/dennis2.png";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Intro.scss";

function Intro() {
  return (
    <section className="intro">
      <div className="intro__circle">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            className="intro__dennis"
            src={DennisPNG}
            alt="a picture of me"
            priority={true}
            quality={100}
          />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
          className="intro__emoji"
        >
          👋
        </motion.span>
      </div>

      <motion.h1 className="intro__text" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hello, I&#39;m Dennis.</span> I&#39;m a{" "}
        <span className="font-bold">frontend developer</span> with <span className="font-bold">3 years</span>{" "}
        of experience. I enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React & Next.js</span>.
      </motion.h1>
    </section>
  );
}

export default Intro;
