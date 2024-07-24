"use client";

import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import React from "react";
import Project from "../Project/Project";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./projects.scss";

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="projects"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.id}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
