import { Flex, Box, Text, Button, Link } from "@chakra-ui/react";
import { HiExternalLink } from "react-icons/hi";
import resume from "../assets/Lautaro-Andreani-CV.pdf";

const Nav = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      zIndex="10"
      top="0"
      width="100%"
      height="3.5rem"
      bg="brand.nav"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Box>
        <Text bg="brand.100" fontFamily="Nunito">
          Lautaro Andreani
        </Text>
      </Box>
      <Box>
        <Link _hover="" href={resume} target="_blank" rel="noreferrer noopener">
          <Button
            rightIcon={<HiExternalLink />}
            width="7rem"
            bg="brand.bg"
            _hover={{ bg: "brand.title" }}
          >
            CV
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Nav;
