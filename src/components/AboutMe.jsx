import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import avatar from "../assets/profile.png";

const AboutMe = () => {
  return (
    <>
      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        background="brand.nav"
        maxWidth="80%"
        padding="10px"
        borderRadius="5px"
        m="0 auto"
        flexWrap="wrap"
        height="10rem"
      >
        <Box>
          <Text as="h1" fontFamily="Nunito" fontWeight="bold" fontSize="2rem">
            Lautaro Andreani
          </Text>
          <Text as="p" fontSize=".9rem">
            Desarrollador Frontend trainee de Mendoza, Argentina
          </Text>
        </Box>
        <Box>
          <Avatar
            name="Lautaro Andreani"
            src={avatar}
            size="xl"
            border="2px solid #4787E6"
            padding="2px"
            background="none"
          />
        </Box>
      </Flex>
      {/* Descriptions */}
      <Box m="2rem auto">
        <Text as="p" fontFamily="Nunito" fontWeight="Bold" fontSize="1.5rem">
          Sobre mí 👦
        </Text>
        <Text
          mt="2rem"
          fontFamily="Open Sans"
          fontWeight="600"
          className="aboutMe-content"
        >
          Actualmente tengo 21 años, estudio{" "}
          <span className="bolder-font">desarrollo frontend</span> y en estos
          momentos me encuentro ampliando mis conocimientos en el mundo de
          <span className="reactJs"> ReactJs</span>. Intento crear proyectos con
          cada tecnología nueva que aprendo, disfruto mucho los desafíos y el
          formarme constantemente.
        </Text>
      </Box>
    </>
  );
};

export default AboutMe;
