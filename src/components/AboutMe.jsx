import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import avatar from "../assets/profile-min.png";

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
            mt={{ base: 2, md: 0 }}
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
          fontWeight="400"
          className="aboutMe-content"
        >
          Actualmente tengo 21 años, estudio{" "}
          <span className="bolder-font">desarrollo frontend</span> y en estos
          momentos me encuentro ampliando mis conocimientos en el mundo de
          <span className="reactJs"> ReactJs </span> y Typescript. Intento crear
          proyectos con cada tecnología nueva que aprendo, me gustan los
          desafíos y el formarme constantemente.
        </Text>
      </Box>
    </>
  );
};

export default AboutMe;
