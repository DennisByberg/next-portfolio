import { FOOTER_STYLE } from "@/styles/footerSX";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box component={"footer"} sx={FOOTER_STYLE}>
      <Box component={"small"} sx={{ fontSize: "0.7rem" }}>
        &copy; 2024 Dennis Byberg. All rights reserved.
      </Box>
    </Box>
  );
}

export default Footer;
