"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { Box, SxProps, TextField, Theme, Typography } from "@mui/material";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SubmitButton from "./Buttons/SubmitButton";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const MY_EMAIL = "dennis.byberg@hotmail.com";

  return (
    <Box
      component={motion.section}
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <Typography paragraph={true}>
        Please contact me directly at{" "}
        <Typography component={"a"} href={`mailto:${MY_EMAIL}`}>
          {MY_EMAIL}
        </Typography>
      </Typography>

      <Box
        component={"form"}
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
      >
        <TextField
          type="email"
          name="senderEmail"
          required
          sx={CONTACT_TEXTFIELD_STYLE}
          fullWidth
          id="outlined-basic"
          label="Your email"
          variant="outlined"
          inputProps={{ maxLength: 100 }}
        />
        <TextField
          sx={CONTACT_TEXTFIELD_STYLE}
          name="message"
          id="outlined-textarea"
          label="Your message"
          multiline
          required
          fullWidth
          rows={8}
          inputProps={{ maxLength: 500 }}
        />

        <SubmitButton />
      </Box>
    </Box>
  );
}

// Material UI Contact styles
const CONTACT_TEXTFIELD_STYLE: SxProps<Theme> = {
  marginTop: "1rem",
};
