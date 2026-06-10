import { DOWNLOAD_BUTTON_STYLE } from "@/styles/buttonsSX";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";

function DownloadSkillsButton() {
  return (
    <Button
      sx={DOWNLOAD_BUTTON_STYLE}
      variant={"contained"}
      endIcon={<DownloadIcon />}
      href={"/Tekniska_Kompetenser_&_Projekt.pdf"}
      download
    >
      Download Skills & Projects
    </Button>
  );
}

export default DownloadSkillsButton;
