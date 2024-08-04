import SendIcon from '@mui/icons-material/Send';
import { Button, CircularProgress, SxProps, Theme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type={'submit'}
      disabled={pending}
      sx={SUBMIT_BUTTON_STYLE}
      className={'send-button'}
      variant={'contained'}
      endIcon={!pending ? <SendIcon /> : <CircularProgress size={16} color={'inherit'} />}
    >
      {!pending ? 'Send' : 'Sending'}
    </Button>
  );
}

// Material UI SubmitButton Styles
const SUBMIT_BUTTON_STYLE: SxProps<Theme> = {
  marginTop: '1rem',
  marginInline: 'auto',
  textAlign: 'center',
  backgroundColor: grey[800],
  fontWeight: 600,
  borderRadius: '99px',
  '&:hover': {
    backgroundColor: grey[900],
  },
  '&:active': {
    transform: 'translateY(3px)',
    transition: '100ms',
  },
  '@media (max-width: 500px)': {
    width: '100%',
    padding: '1rem',
    borderRadius: '5px',
  },
};
