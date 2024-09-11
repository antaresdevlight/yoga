import { Flex, Text, Button } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <Flex
      w="100%"
      border="1px"
      justifyContent="center"
      direction="column"
      alignItems="center"
      paddingBottom="30px"
      paddingTop="30px"
      backgroundColor="aqua"
    >
      <Flex gap="20px">
        <Text fontSize="18px">Home</Text>
        <Text fontSize="18px">Experience</Text>
        <Text fontSize="18px">News</Text>
        <Text fontSize="18px">Experience</Text>
      </Flex>

      <Flex gap="20px" marginTop="20px" marginBottom="20px">
        <FaFacebook style={{ width: "30px", height: "30px" }} />
        <FaInstagramSquare style={{ width: "30px", height: "30px" }} />
      </Flex>

      <Flex>
        <Text fontSize="16px">Copy 2024</Text>
      </Flex>
    </Flex>
  );
}

export default Footer;
