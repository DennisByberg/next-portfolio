import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import getGreetings from "./getGreetings";

function getFormattedIntroText() {
  return (
    <>
      <Box
        component={TypeAnimation}
        sequence={getGreetings()}
        speed={15}
        repeat={Infinity}
        sx={{
          fontWeight: 750,
          display: "block",
          width: "100%",
          textAlign: "center",
          mb: 1,
        }}
        wrapper={"span"}
      ></Box>{" "}
      My name is Dennis Byberg. I&#39;m a{" "}
      <Box component={"span"} sx={{ fontWeight: 750 }}>
        System Developer
      </Box>{" "}
      with{" "}
      <Box component={"span"} sx={{ fontWeight: 750 }}>
        5 years
      </Box>{" "}
      of education within development and IT.
    </>
  );
}

export default getFormattedIntroText;
