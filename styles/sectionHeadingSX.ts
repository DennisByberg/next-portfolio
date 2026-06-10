import { alpha, SxProps, Theme, useTheme } from "@mui/material";
import { grey, purple } from "@mui/material/colors";

export const SECTION_HEADING_TEXT_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();
  return {
    fontSize: "1.5rem",
    fontWeight: 500,
    textTransform: "capitalize",
    position: "relative",
    textAlign: "center",
    backgroundColor:
      theme.palette.mode === "light" ? alpha(purple[50], 0.7) : grey[800],
    marginBottom: "1rem",
    marginTop: 0,
    padding: "0.7rem 1.5rem",
    borderRadius: "45px 10px 99px 1px",
  };
};
