import { SxProps, Theme, useTheme } from "@mui/material";
import { common, grey } from "@mui/material/colors";

export const INTRO_STYLE: SxProps<Theme> = {
  maxWidth: "50rem",
  width: "100%",
  textAlign: "center",
  scrollMarginTop: "100rem",
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
};

export const INTRO_CIRCLE_STYLE: SxProps<Theme> = {
  marginInline: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: "130px",
  borderRadius: "50%",
};

export const INTRO_PHOTO_STYLE: SxProps<Theme> = {
  borderRadius: 99,
  objectFit: "cover",
  objectPosition: "center top",
};

export const INTRO_PHOTO_EMOJI_STYLE: SxProps<Theme> = {
  fontSize: "3rem",
  position: "absolute",
  bottom: "-1rem",
  right: "-1rem",
};

export const INTRO_TEXT_STYLE: SxProps<Theme> = {
  paddingInline: "1rem",
  fontSize: "1.5rem",
  fontWeight: 500,
  lineHeight: 1.5,

  "@media (min-width: 640px)": {
    fontSize: "2.25rem",
  },
};

export const INTRO_BUTTONS_CONTAINER_STYLE: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  paddingInline: "1rem",
};

export const INTRO_BIGGER_BUTTONS_CONTAINER_STYLE: SxProps<Theme> = {
  display: "flex",
  gap: "1rem",
  maxWidth: 650,
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",

  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
};
