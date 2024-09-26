import { Flex, Text, Link } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function MyWork() {
  return (
    <Flex
      direction="column"
      paddingBottom="50px"
      paddingTop="50px"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        color="#FFA688"
        fontSize="30px"
        fontWeight="600"
        lineHeight="normal"
      >
        SERVICES I OFFER
      </Text>
      <Text>-------</Text>

      <Flex
        gap="50px"
        paddingTop="50px"
        direction={{ base: "column", lg: "row" }}
        alignItems="center"
      >
        <Flex
          w="200px"
          h="200px"
          border="4px solid #FFA688 "
          borderRadius="5px"
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap="10px"
          backgroundColor="black"
          marginTop="20px"
        >
          <Flex
            w="30px"
            h="30px"
            
            backgroundColor="#FFA688"
            justifyContent="center"
            alignItems="center"
          >
            <Link>
              <FaFacebook style={{ width: "25px", height: "25px" }} />
            </Link>
          </Flex>
          <Text color="#FFA688">Graphic Designing</Text>
          <Text textAlign="center" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </Text>
        </Flex>

        <Flex
          w="250px"
          h="250px"
          border="4px solid #FFA688"
          backgroundColor="black"
          borderRadius="5px"
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap="10px"
        >
          <Flex
            w="30px"
            h="30px"
            
            backgroundColor="#FFA688"
            justifyContent="center"
            alignItems="center"
          >
            <Link>
              <FaInstagramSquare style={{ width: "25px", height: "25px" }} />
            </Link>
          </Flex>
          <Text color="#FFA688">Web Developement</Text>
          <Text textAlign="center" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </Text>
        </Flex>

        <Flex
          w="200px"
          h="200px"
          border="4px solid #FFA688 "
          borderRadius="5px"
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap="10px"
          backgroundColor="black"
          marginTop="20px"
        >
          <Flex
            w="30px"
            h="30px"
          
            backgroundColor="#FFA688"
            justifyContent="center"
            alignItems="center"
          >
            <Link>
              <FaFacebook style={{ width: "25px", height: "25px" }} />
            </Link>
          </Flex>
          <Text color="#FFA688">Social Media Marketing</Text>
          <Text textAlign="center" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MyWork;
