import { SUBMIT_BUTTON_STYLE } from '@/styles/buttonsSX';
import SendIcon from '@mui/icons-material/Send';
import { Button, CircularProgress } from '@mui/material';
import { grey } from '@mui/material/colors';

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button
      type={'submit'}
      disabled={pending}
      sx={SUBMIT_BUTTON_STYLE}
      className={'send-button'}
      variant={'contained'}
      endIcon={
        !pending ? <SendIcon /> : <CircularProgress size={16} sx={{ color: grey[600] }} />
      }
    >
      {!pending ? 'Send' : 'Sending'}
    </Button>
  );
}

export default SubmitButton;
