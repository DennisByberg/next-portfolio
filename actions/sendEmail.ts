'use server';
import ContactFormEmail from '@/email/ContactFormEmail';
import getErrorMessage from '@/utils/getErrorMessage';
import validateString from '@/utils/validateString';
import React from 'react';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);

async function sendEmail(formData: FormData) {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  /* Validate the sender's email address. 
  If the email is invalid or exceeds 100 characters, return an error. */
  if (!validateString(senderEmail, 100)) {
    return { error: 'Invalid sender email' };
  }

  /* Validate the message content.
  If the message is invalid or exceeds 500 characters, return an error. */
  if (!validateString(message, 500)) {
    return { error: 'Invalid message' };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'dennis.byberg.dev@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    const errorMessage = getErrorMessage(error);
    return {
      error: errorMessage,
    };
  }

  return {
    data,
  };
}

export default sendEmail;
