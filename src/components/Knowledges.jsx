import {
  Box,
  Text,
  Icon,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { SiFirebase, SiJavascript } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { DiReact, DiGithubAlt, DiBootstrap, DiHtml5 } from "react-icons/di";
import Software from "./Software";

const Knowledges = () => {
  return (
    <Box m="3rem auto">
      <Text as="p" fontFamily="Nunito" fontWeight="Bold" fontSize="1.5rem">
        Mis conocimientos 🧠
        {/* <Icon as={BsGithub} ml={3} /> */}
      </Text>
      {/* Conocimientos */}
      <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
        <Box>
          <Text
            display="flex"
            alignItems="center"
            fontWeight="bolder"
            color="brand.title"
          >
            <Icon as={BiCodeAlt} m={3} /> Frontend Developer
          </Text>
          <UnorderedList listStyleType="none" spacing={3} ml={10}>
            <ListItem>
              <Icon as={DiReact} fontSize="1.2rem" /> ReactJs/Hooks
            </ListItem>
            <ListItem>
              <Icon as={SiFirebase} fontSize="1.2rem" /> Firebase
            </ListItem>
            <ListItem>
              <Icon as={DiGithubAlt} fontSize="1.2rem" /> Git/Github
            </ListItem>
            <ListItem>
              <Icon as={DiBootstrap} fontSize="1.2rem" /> Bootstrap
            </ListItem>
            <ListItem>
              <Icon as={SiJavascript} fontSize=".9rem" mr={1.5} /> Javascript
            </ListItem>
            <ListItem>
              <Icon as={DiHtml5} fontSize="1.2rem" /> HTML5/CSS3
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Software />
        </Box>
      </Flex>
    </Box>
  );
};

export default Knowledges;
