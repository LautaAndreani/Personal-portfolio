import { Center, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Center as="footer" marginBottom={30} color="#B2B2B2">
      <Text as="small">
        Gracias por leer. Todos los derechos reservados{" "}
        {new Date().getFullYear()}
      </Text>
    </Center>
  );
};

export default Footer;
