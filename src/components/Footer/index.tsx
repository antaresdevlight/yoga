import { Flex, Text, Button, Link } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <Flex
      w="100%"
    
      justifyContent="center"
      direction="column"
      alignItems="center"
      paddingBottom="30px"
      paddingTop="30px"
      backgroundColor="aqua"
    >
      <Flex gap="20px">
        <Link fontSize="18px">Home</Link>
        <Link fontSize="18px">Experience</Link>
        <Link fontSize="18px">News</Link>
        <Link fontSize="18px">Experience</Link>
      </Flex>

      <Flex gap="20px" marginTop="20px" marginBottom="20px">
       <Link>
        <FaFacebook style={{ width: "30px", height: "30px" }} />
        </Link>
        <Link>
        <FaInstagramSquare style={{ width: "30px", height: "30px" }} />
        </Link>
      </Flex>

      <Flex>
        <Text fontSize="16px">Copy 2024</Text>
      </Flex>
    </Flex>
  );
}

export default Footer;
