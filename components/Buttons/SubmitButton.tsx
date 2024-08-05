import { SUBMIT_BUTTON_STYLE } from '@/styles/buttonsSX';
import SendIcon from '@mui/icons-material/Send';
import { Button, CircularProgress } from '@mui/material';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
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

export default SubmitButton;
