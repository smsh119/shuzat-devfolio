import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Link,
  pixelBasedPreset,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

function ContactMail({ name, email, message }) {
  return (
    <Html>
      <Head>
        <title>SHUZAT-DEVFOLIO | Contact Form Message</title>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                bg: "#1b1f3b",
                primary: "#8b5cf6",
                secondary: "#252849",
                text: "#ececf1",
              },
            },
          },
        }}
      >
        <Body className="text-text m-0 p-0">
          <Container className="bg-bg mt-5 w-screen p-0 pb-30 text-center">
            {/* TODO: add email logo */}
            {/* <Img src="./LOGO v1.png" alt="Logo" width="30" height="30" /> */}
            <Text className="bg-secondary m-0 px-0 py-4 text-xl font-bold">
              SHUZAT-DEVFOLIO
            </Text>
            <Section className="m-0 flex-col p-0">
              <Heading as="h2" className="m-0 my-4 p-0 text-center text-base">
                New Contact-Form Message
              </Heading>
              <Section className="text-base">
                <Text className="m-0 p-0">
                  {name}
                  {"<"}
                  <Link href={`mailto:${email}`}>{email}</Link>
                  {">"}
                </Text>
                <Heading
                  as="h3"
                  className="bg-secondary mx-0 my-4 px-0 py-2 text-center text-base font-bold"
                >
                  Message
                </Heading>
                <Text className="mx-auto my-0 max-w-3/4 px-8 py-0 text-justify whitespace-pre-wrap">
                  {message}
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactMail;
