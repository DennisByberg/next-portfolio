"use client";
import { Box, SxProps, Theme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <Box
      component={motion.div}
      sx={SECTION_DIVIDER_STYLE}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></Box>
  );
}

// Material UI SectionDivider styles
const SECTION_DIVIDER_STYLE: SxProps<Theme> = {
  backgroundColor: grey[200],
  marginTop: "4rem",
  marginBottom: "4rem",
  height: "4rem",
  width: "0.25rem",
  borderRadius: "99px",
  display: "none",

  "@media (min-width: 640px)": {
    display: "block",
  },
};
