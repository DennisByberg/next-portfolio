import { Box } from '@mui/material';

function getFormattedIntroText() {
  const FIRST_NAME = 'Dennis Byberg';
  const ROLE = 'Junior Frontend Developer';
  const EXPERIENCE = '3 years';
  const FOCUS = 'React & Next.js';

  return (
    <>
      <Box component={'span'} sx={{ fontWeight: 750 }}>
        Hello, I&#39;m {FIRST_NAME}.
      </Box>{' '}
      I&#39;m a{' '}
      <Box component={'span'} sx={{ fontWeight: 750 }}>
        {ROLE}
      </Box>{' '}
      with{' '}
      <Box component={'span'} sx={{ fontWeight: 750 }}>
        {EXPERIENCE}
      </Box>{' '}
      of experience. My focus is{' '}
      <Box component={'span'} sx={{ textDecoration: 'underline' }}>
        {FOCUS}
      </Box>
    </>
  );
}

export default getFormattedIntroText;
