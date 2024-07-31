"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useSectionInView } from "@/lib/hooks";
import DennisPNG from "@/public/dennis2.png";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Intro.scss";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="intro">
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

      <motion.h1
        className="intro__text"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&#39;m Dennis.</span> I&#39;m a{" "}
        <span className="font-bold">frontend developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React & Next.js</span>.
      </motion.h1>

      <motion.div
        className="intro__buttons-container"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* CONTACT ME HERE */}
        <Button
          className="intro__contact-button"
          variant="contained"
          endIcon={<KeyboardDoubleArrowRightIcon />}
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
        </Button>

        {/* DOWNLOAD CV */}
        <Button
          className="intro__download-cv-button"
          variant="contained"
          endIcon={<DownloadIcon />}
          href="/CV.pdf"
          download
        >
          Download CV
        </Button>

        {/* LINKED IN */}
        <IconButton
          className="linked-in-button"
          aria-label="linked in"
          href="https://www.linkedin.com/in/dennisbyberg/"
          target="_blank"
        >
          <LinkedInIcon className="intro__linked-in-icon" />
        </IconButton>

        {/* GITHUB */}
        <IconButton
          className="github-button"
          aria-label="github"
          href="https://github.com/DennisByberg"
          target="_blank"
        >
          <GitHubIcon className="intro__github-icon" />
        </IconButton>
      </motion.div>
    </section>
  );
}

export default Intro;
