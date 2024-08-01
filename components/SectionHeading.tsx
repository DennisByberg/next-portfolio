import { Typography } from "@mui/material";

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant={"h2"} sx={SECTION_HEADING_TEXT_STYLE}>
      {children}
    </Typography>
  );
}

// Material UI SectionHeading styles
const SECTION_HEADING_TEXT_STYLE = {
  fontSize: "1.5rem",
  fontWeight: "normal",
  textTransform: "capitalize",
  marginBottom: "2rem",
  textAlign: "center",
};
