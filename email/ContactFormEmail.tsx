import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface IContactFormEmailProps {
  message: string;
  senderEmail: string;
}

function ContactFormEmail({ message, senderEmail }: IContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from next portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border-black my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The senders email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactFormEmail;
