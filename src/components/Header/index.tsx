import { Flex, Link, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      w={{ base: "300px", md: "auto" }}
      direction={{ base: "column", md: "row" }}
      paddingBottom="50px"
      paddingTop="50px"
      justifyContent="center"
      gap="30px"
      alignItems="center"
    >
      <Flex justifyContent="center" gap="10px" alignItems="center">
        <Flex border="2px" w="45px" h="45px"></Flex>
        <Text
          fontSize="18px"
          fontWeight="700"
          lineHeight="normal"
          color="#375B26"
        >
          Yoga International
        </Text>
      </Flex>

      <Flex
        w={{ base: "300px", md: "auto" }}
        flexWrap="wrap"
        gap="30px"
        alignItems="center"
        justifyContent="center"
      >
        <Link
          fontSize="14px"
          fontWeight="700"
          lineHeight="normal"
          color="#112734"
        >
          Articles
        </Link>
        <Link
          fontSize="14px"
          fontWeight="700"
          lineHeight="normal"
          color="#112734"
        >
          Classes
        </Link>
        <Link
          fontSize="14px"
          fontWeight="700"
          lineHeight="normal"
          color="#112734"
        >
          Courses
        </Link>
        <Link
          fontSize="14px"
          fontWeight="700"
          lineHeight="normal"
          color="#112734"
        >
          Teachers
        </Link>
        <Link
          fontSize="14px"
          fontWeight="700"
          lineHeight="normal"
          color="#112734"
        >
          About
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
