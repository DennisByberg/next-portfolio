import DownloadIcon from '@mui/icons-material/Download';
import { Button, SxProps, Theme, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function DownloadCVButton() {
  const theme = useTheme();

  // Material UI DownloadCVButton Styles
  const DOWNLOAD_CV_BUTTON_STYLE: SxProps<Theme> = {
    backgroundColor: grey[50],
    color: grey[900],
    fontWeight: 600,
    borderRadius: 99,

    '&:hover': {
      backgroundColor: theme.palette.mode === 'light' ? grey[200] : grey[400],
    },

    '&:active': {
      transform: 'translateY(3px)',
      transition: '100ms',
    },
  };

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
