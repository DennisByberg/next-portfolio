"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SubmitButton from "../Buttons/SubmitButton";
import SectionHeading from "../SectionHeading/SectionHeading";

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

        <SubmitButton />
      </form>
    </motion.section>
  );
}

export default Contact;
