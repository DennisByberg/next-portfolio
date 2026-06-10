"use client";
import useSectionInView from "@/hooks/useSectionInView";
import { ABOUT_SECTION_STYLE } from "@/styles/aboutSX";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <Box
      sx={ABOUT_SECTION_STYLE}
      component={motion.section}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id={"about"}
      ref={ref}
    >
      <SectionHeading icon={<PersonIcon />}>About me</SectionHeading>
      <Typography sx={{ mb: 4, lineHeight: 1.9 }}>
        My name is Dennis Byberg, and I am a 31-year-old system developer
        living in Kållered, Göteborg. When I&apos;m not diving into various
        hobby projects, I enjoy spending time with my son and partner. In
        addition to that, I have a great interest in football and look forward
        to one day being able to hit the golf course when time and opportunity
        allow, as I have developed a strong interest in golf while working
        part-time at Hills Golf & Sports Club.
      </Typography>
      <Typography sx={{ mb: 0, lineHeight: 1.9 }}>
        I have five years of tech education — one year in .NET development at
        Campus Mölndal, two years in front-end development at Jensen
        Yrkeshögskola, and two years in Cloud Development at Campus Mölndal YH,
        from which I recently graduated. During my studies I completed
        internships at Volvo Cars, working with React and Microsoft Dynamics,
        and at Ess Group, where I built a React/TypeScript dashboard with a
        FastAPI backend. I am now actively looking for new opportunities within
        development and IT.
      </Typography>
    </Box>
  );
}

export default About;
