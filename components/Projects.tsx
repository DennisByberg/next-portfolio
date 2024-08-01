"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Box, SxProps, Theme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Project from "./Project/Project";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <Box
      component={motion.section}
      sx={PROJECTS_SECTION_STYLE}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="projects"
      ref={ref}
    >
      <SectionHeading>My Projects</SectionHeading>
      <Box component={"div"}>
        {projectsData.map((project) => (
          <React.Fragment key={project.id}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}

// Material UI Projects styles
const PROJECTS_SECTION_STYLE: SxProps<Theme> = {
  scrollMarginTop: "7rem",
};
