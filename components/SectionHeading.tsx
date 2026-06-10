import { SECTION_HEADING_TEXT_STYLE } from "@/styles/sectionHeadingSX";
import { Box, Typography } from "@mui/material";

function SectionHeading({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <Typography variant={"h2"} sx={SECTION_HEADING_TEXT_STYLE}>
      {icon && (
        <Box component="span" sx={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center" }}>
          {icon}
        </Box>
      )}
      {children}
    </Typography>
  );
}

export default SectionHeading;
