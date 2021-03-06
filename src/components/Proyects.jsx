import { useState, useEffect } from "react";
import {
  Box,
  Text,
  Icon,
  Flex,
  Spinner,
  Center,
  Button,
  Link,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import Proyecto from "./Proyecto";

const Proyects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://api.github.com/users/LautaAndreani/repos";
    const getData = await fetch(url);
    const dataToJson = await getData.json();
    setData(dataToJson);
  };

  const filterProject = data.filter(
    (project) =>
      project.name !== "Dronenatic-web" &&
      project.name !== "Personal-portfolio" &&
      project.name !== "Tip-calculator"
  );

  return (
    <>
      {filterProject.length === 0 ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Box>
          <Text as="p" fontFamily="Nunito" fontWeight="Bold" fontSize="1.5rem">
            Mis proyectos en <span className="github-text">Github</span>
            <Icon as={BsGithub} ml={3} />
          </Text>
          <Flex
            display="flex"
            flexWrap="wrap"
            flexDirection={{ base: "column", md: "row" }}
          >
            {filterProject.map((project) => {
              return <Proyecto key={project.id} project={project} />;
            })}
          </Flex>
          <Box w={"88%"} textAlign="center">
            <Link
              _hover=""
              href="https://github.com/LautaAndreani"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button
                colorScheme="blue"
                bg="brand.nav"
                color="#dedede"
                _hover={{ bg: "brand.title" }}
                mt={7}
                size="md"
                rightIcon={<HiExternalLink />}
              >
                Ver más
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Proyects;
