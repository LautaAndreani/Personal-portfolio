import { Box } from "@chakra-ui/react";

const Gif = () => {
  return (
    <Box display="flex" justifyContent="center" mt="3.2rem">
      <lottie-player
        src="https://assets8.lottiefiles.com/packages/lf20_hdatvaor.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        style={{ width: "200px" }}
      ></lottie-player>
    </Box>
  );
};

export default Gif;
