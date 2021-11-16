import { Text, Box, Badge, Button, Flex, Link } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
// import { photo } from "../assets/{project.name}.png";

const Proyecto = ({ project }) => {
  console.log(project);
  const { topics } = project;
  return project.name === "LautaAndreani" ||
    project.name === "Portfolioweb" ? null : (
    <Flex
      width={{ base: "95%", md: "25rem" }}
      h="25rem"
      m={3}
      p={5}
      borderRadius="5px"
      mt="2rem"
      bg="#323235"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Text as="h3" fontSize="1.3rem" fontFamily="Nunito">
          {project.name}
        </Text>
        <Text mt={3} fontSize=".9rem">
          {project.description}
        </Text>
        <Box>
          {topics.map((tech) => {
            return (
              <Badge
                m={1}
                mt={2}
                fontSize={11}
                colorScheme="blue"
                variant="subtle"
              >
                {tech}
              </Badge>
            );
          })}
        </Box>
      </Box>
      {/* Buttons */}
      <Box>
        <Link
          _hover=""
          href={project.html_url}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button
            bg="brand.title"
            _hover={{ bg: "#356DC1" }}
            rightIcon={<BsGithub size={12} />}
            size="sm"
          >
            Repositorio
          </Button>
        </Link>
        <Link
          _hover=""
          href={project.homepage}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button
            size="sm"
            ml={2}
            colorScheme="whiteAlpha"
            variant="outline"
            rightIcon={<FaExternalLinkAlt size={12} />}
          >
            Live Demo
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Proyecto;
