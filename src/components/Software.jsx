import { Box, Text, Icon, ListItem, UnorderedList } from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import {
  SiVisualstudiocode,
  SiAdobeillustrator,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";
import { VscTerminalLinux } from "react-icons/vsc";

const Software = () => {
  return (
    <Box ml={20}>
      <Text
        display="flex"
        alignItems="center"
        fontWeight="bolder"
        color="brand.title"
      >
        <Icon as={MdSettings} m={3} /> Software
      </Text>
      <UnorderedList listStyleType="none" spacing={3}>
        <ListItem>
          <Icon as={SiVisualstudiocode} fontSize="1.2rem" mr={2} /> Visual
          studio code
        </ListItem>
        <ListItem>
          <Icon as={FaTerminal} fontSize="1.2rem" mr={2} /> Terminal
        </ListItem>
        <ListItem>
          <Icon as={VscTerminalLinux} fontSize="1.2rem" mr={2} /> Linux
        </ListItem>
        <ListItem>
          <Icon fontSize="1.2rem" as={SiAdobeillustrator} mr={2} /> Adobe
          Illustrator
        </ListItem>
        <ListItem>
          <Icon fontSize="1.2rem" mr={1.5} as={SiFigma} /> Figma
        </ListItem>
        <ListItem>
          <Icon fontSize="1.2rem" as={SiAdobephotoshop} mr={2} /> Adobe
          Photoshop
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Software;
