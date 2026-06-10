"use client";
import useSectionInView from "@/hooks/useSectionInView";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Box } from "@mui/material";
import React from "react";
import CustomizedTimeline from "./CustomizedTimeline";
import SectionHeading from "./SectionHeading";

function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <Box
      sx={{ scrollMarginTop: "5rem", maxWidth: "50rem", width: "100%" }}
      component={"section"}
      id={"experience"}
      ref={ref}
    >
      <SectionHeading icon={<WorkHistoryIcon />}>Experience</SectionHeading>
      <CustomizedTimeline />
    </Box>
  );
}

export default Experience;
