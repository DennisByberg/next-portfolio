"use client";
import { useSectionInView } from "@/lib/hooks";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <Box
      sx={ABOUT_SECTION_STYLE}
      component={motion.section}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <Typography paragraph={true} sx={ABOUT_ME_TEXT_STYLE}>
        My name is Dennis Byberg, and I am a 29-year-old man living in Gothenburg - Kållered -
        Sweden. I lead an active lifestyle with a strong interest in sports and IT. I hold a social
        membership at Hills Golf & Sports Club where I spend a lot of time in their gym.
        Additionally, I play football once a week in a recreational league, spend time with my
        family and devote much of my free time to coding.
      </Typography>
      <Typography paragraph={true} sx={ABOUT_ME_TEXT_STYLE}>
        I have a background in backend development, having completed courses at Campus Mölndal for a
        year. However, I chose to fully commit to frontend development. Therefore, I decided to
        study at Jensen YH where I have now completed my education and can call myself a junior
        frontend developer.
      </Typography>
    </Box>
  );
}

// Material UI About styles
const ABOUT_SECTION_STYLE: SxProps<Theme> = {
  textAlign: "center",
  maxWidth: "50rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  scrollMarginTop: "7rem",
};

const ABOUT_ME_TEXT_STYLE: SxProps<Theme> = {
  marginBottom: "1.5rem",
  lineHeight: 1.9,
};
