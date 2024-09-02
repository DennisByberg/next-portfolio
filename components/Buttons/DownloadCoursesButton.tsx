import { DOWNLOAD_BUTTON_STYLE } from '@/styles/buttonsSX';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';

function DownloadCoursesButton() {
  return (
    <Button
      sx={DOWNLOAD_BUTTON_STYLE}
      variant={'contained'}
      endIcon={<DownloadIcon />}
      href={'/Avklarade_Kurser.pdf'}
      download
    >
      Download Courses
    </Button>
  );
}

export default DownloadCoursesButton;
