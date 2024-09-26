import { Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo_yoga from "src/assets/logo_yoga.jpg";

function Header() {
  return (
    <Flex
      paddingBottom="50px"
      paddingTop="50px"
      justifyContent="center"
      gap="30px"
      alignItems="center"
    >
      <Flex justifyContent="center" gap="10px" alignItems="center">
        <Flex w="45px" h="45px">
          <Image src={logo_yoga} width={45} height={45} alt="logo_yoga" />
        </Flex>
        <Text
          fontSize="18px"
          fontWeight="700"
          lineHeight="normal"
          color="#375B26"
        >
          Yoga International
        </Text>
      </Flex>

      <Flex gap="30px">
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
