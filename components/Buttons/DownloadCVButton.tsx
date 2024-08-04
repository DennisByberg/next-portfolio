import DownloadIcon from '@mui/icons-material/Download';
import { Button, SxProps, Theme } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function DownloadCVButton() {
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

const DOWNLOAD_CV_BUTTON_STYLE: SxProps<Theme> = {
  backgroundColor: grey[50],
  color: grey[900],
  fontWeight: 600,
  borderRadius: 99,

  '&:hover': {
    backgroundColor: grey[200],
  },

  '&:active': {
    transform: 'translateY(3px)',
    transition: '100ms',
  },
};
