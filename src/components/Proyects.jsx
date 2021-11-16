import { useState, useEffect } from "react";
import { Box, Text, Icon, Flex, Spinner, Center } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
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

  return (
    <>
      {data === "" ? (
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
            {data.map((project) => {
              return <Proyecto key={project.id} project={project} />;
            })}
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Proyects;
