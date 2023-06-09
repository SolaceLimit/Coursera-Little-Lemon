import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
    <footer>
      <Flex
        margin="0 auto"
        px={12}
        justifyContent="center"
        alignItems="center"
        maxWidth="1024px"
        height={16}
      >
        <p>Coursera - Little Lemon • © 2022</p>
      </Flex>
    </footer>
  </Box>
  );
};
export default Footer;
