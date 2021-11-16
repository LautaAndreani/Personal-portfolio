import { Icon, ListItem, Link } from "@chakra-ui/react";

const ContactLinks = ({ icon, link, linkSocial }) => {
  return (
    <ListItem>
      <Icon as={icon} mr={1.5} />
      <Link href={linkSocial} rel="noopener noreferrer" target="_blank">
        {link}
      </Link>
    </ListItem>
  );
};

export default ContactLinks;
