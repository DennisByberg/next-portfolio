"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import SendIcon from "@mui/icons-material/Send";
import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Contact.scss";

function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        Please contact me directly at{" "}
        <a href="mailto:dennis.byberg@hotmail.com">dennis.byberg@hotmail.com</a>
      </p>

      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <TextField
          type="email"
          name="senderEmail"
          required
          sx={{ marginTop: "1rem" }}
          fullWidth
          id="outlined-basic"
          label="Your email"
          variant="outlined"
          inputProps={{ maxLength: 100 }}
        />
        <TextField
          sx={{ marginTop: "1rem" }}
          name="message"
          id="outlined-textarea"
          label="Your message"
          multiline
          required
          fullWidth
          rows={8}
          inputProps={{ maxLength: 500 }}
        />
        <Button
          type="submit"
          sx={{ marginTop: "1rem" }}
          className="send-button"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </motion.section>
  );
}

export default Contact;
