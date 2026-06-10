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

export default function ContactFormEmail({
  message,
  senderEmail,
}: IContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="max-w-lg mx-auto my-10">
            <Section className="bg-white rounded-lg px-10 py-8">
              <Text className="text-xs font-semibold text-gray-400 uppercase tracking-widest m-0 mb-6">
                dennisbyberg.dev
              </Text>

              <Heading className="text-gray-900 text-xl font-semibold m-0 mb-2">
                New message from your portfolio
              </Heading>
              <Text className="text-gray-500 text-sm m-0 mb-6">
                Someone submitted the contact form.
              </Text>

              <Hr className="border-gray-200 mb-6" />

              <Text className="text-gray-700 text-base leading-relaxed m-0">
                {message}
              </Text>

              <Hr className="border-gray-200 mt-6 mb-4" />

              <Text className="text-xs text-gray-400 m-0">FROM</Text>
              <Text className="text-sm font-medium text-gray-900 m-0 mt-1">
                {senderEmail}
              </Text>
            </Section>

            <Text className="text-center text-xs text-gray-400 mt-4">
              Dennis Byberg · Portfolio Contact Form
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
