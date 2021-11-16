import { Text, Box, UnorderedList } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";
import resume from "../assets/Lautaro-Andreani-CV.pdf";
import ContactLinks from "./ContactLinks";

const Contact = () => {
  return (
    <Box m="3rem auto">
      <Text as="p" fontFamily="Nunito" fontWeight="Bold" fontSize="1.5rem">
        ¿Dónde encontarme? 📬
      </Text>
      <UnorderedList listStyleType="none" spacing={3} ml={10} mt={3}>
        <ContactLinks
          icon={BsLinkedin}
          link="Linkedin"
          linkSocial="https://www.linkedin.com/in/lautaroandreani/"
        />
        <ContactLinks
          icon={BsGithub}
          link="Github"
          linkSocial="https://github.com/LautaAndreani"
        />
        <ContactLinks
          icon={SiMinutemailer}
          link="Email"
          linkSocial="mailto:lautaroandreani2016@gmail.com"
        />
        <ContactLinks
          icon={HiDocumentText}
          link="Más información"
          linkSocial={resume}
        />
      </UnorderedList>
    </Box>
  );
};

export default Contact;
