'use client';
import sendEmail from '@/actions/sendEmail';
import useSectionInView from '@/hooks/useSectionInView';
import { Box, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import SubmitButton from './Buttons/SubmitButton';
import SectionHeading from './SectionHeading';

function Contact() {
  const { ref } = useSectionInView('Contact');
  const MY_EMAIL = 'dennis.byberg.dev@gmail.com';

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [pending, setPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    const { data, error } = await sendEmail(formData);
    setPending(false);
    if (error) {
      toast.error(error);
      return;
    }

    toast.success('Email sent successfully');
    setEmail('');
    setMessage('');
  }

  return (
    <Box
      component={motion.section}
      id={'contact'}
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <Typography paragraph={true} sx={{ textAlign: 'center', mb: 0 }}>
        Please contact me directly at{' '}
        <Typography component={'a'} href={`mailto:${MY_EMAIL}`}>
          {MY_EMAIL}
        </Typography>
      </Typography>

      <Box
        component={'form'}
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          await handleSubmit(formData);
        }}
      >
        <TextField
          type={'email'}
          name={'senderEmail'}
          required
          sx={{ mt: '1rem' }}
          fullWidth
          id={'outlined-basic'}
          label={'Your email'}
          variant={'outlined'}
          inputProps={{ maxLength: 100 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ mt: '1rem', mb: '1rem' }}
          name={'message'}
          id={'outlined-textarea'}
          label={'Your message'}
          multiline
          required
          fullWidth
          rows={8}
          inputProps={{ maxLength: 500 }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <SubmitButton pending={pending} />
      </Box>
    </Box>
  );
}

export default Contact;
