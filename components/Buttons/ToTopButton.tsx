import useScrollButtonVisibility from '@/hooks/useScrollButtonVisibility';
import { TO_TOP_BUTTON_STYLE } from '@/styles/buttonsSX';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from '@mui/material';

function ToTopButton() {
  const isScrollButtonVisible = useScrollButtonVisibility();

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    isScrollButtonVisible && (
      <IconButton
        title={'Scroll to top'}
        size={'small'}
        sx={TO_TOP_BUTTON_STYLE}
        onClick={scrollUp}
      >
        <ArrowUpwardIcon />
      </IconButton>
    )
  );
}

export default ToTopButton;
