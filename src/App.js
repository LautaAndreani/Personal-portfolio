import { Box } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Gif from "./components/Gif";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import Knowledges from "./components/Knowledges";
import "./global.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Box className="container" as="main" w="60rem" m="0 auto">
        <Gif />
        <AboutMe />
        <Proyects />
        <Knowledges />
        <Contact />
        <Footer />
      </Box>
    </>
  );
}

export default App;
