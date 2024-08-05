import { DOWNLOAD_CV_BUTTON_STYLE } from '@/styles/buttonsSX';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';

function DownloadCVButton() {
  return (
    <Button
      sx={DOWNLOAD_CV_BUTTON_STYLE}
      variant={'contained'}
      endIcon={<DownloadIcon />}
      href={'/CV.pdf'}
      download
    >
      Download CV
    </Button>
  );
}

export default DownloadCVButton;
