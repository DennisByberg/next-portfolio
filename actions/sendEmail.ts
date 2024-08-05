'use server';
import ContactFormEmail from '@/email/ContactFormEmail';
import getErrorMessage from '@/utils/getErrorMessage';
import validateString from '@/utils/validateString';
import React from 'react';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
console.log('RESEND_API_KEY:', resendApiKey);

const resend = new Resend(resendApiKey);

async function sendEmail(formData: FormData) {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  console.log('Received form data:', { senderEmail, message });

  if (!validateString(senderEmail, 100)) {
    console.error('Invalid sender email:', senderEmail);
    return { error: 'Invalid sender email' };
  }

  if (!validateString(message, 500)) {
    console.error('Invalid message:', message);
    return { error: 'Invalid message' };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'dennis.byberg@hotmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
    console.log('Email sent successfully:', data);
  } catch (error: unknown) {
    const errorMessage = getErrorMessage(error);
    console.error('Error sending email:', errorMessage);
    return {
      error: errorMessage,
    };
  }

  return {
    data,
  };
}

export default sendEmail;
