import NextLink from "next/link";
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
        <Link as={NextLink} href="/">
          <Flex w="45px" h="45px" borderRadius="full" overflow="hidden">
            <Image src={logo_yoga} width={45} height={45} alt="logo_yoga" />
          </Flex>
        </Link>

        <Text
          fontSize="18px"
          fontWeight="700"
          lineHeight="normal"
          color="#375B26"
        >
          Yoga Iris Castelán
        </Text>
      </Flex>

      <Flex gap="30px">
        <Link
          as={NextLink}
          fontSize="14px"
          fontWeight="700"
          lineHeight="normal"
          color="#112734"
          href="/clases"
        >
          Clases
        </Link>
        <Link
          as={NextLink}
          fontSize="14px"
          fontWeight="700"
          lineHeight="normal"
          color="#112734"
          href="/retiros"
        >
          Retiros
        </Link>

        <Link
          as={NextLink}
          fontSize="14px"
          fontWeight="700"
          lineHeight="normal"
          color="#112734"
          href="/eventos"
        >
          Eventos
        </Link>

        <Link
          as={NextLink}
          fontSize="14px"
          fontWeight="700"
          lineHeight="normal"
          color="#112734"
          href="/sobre-mi"
        >
          Sobre Mí
        </Link>
        <Link
          as={NextLink}
          fontSize="14px"
          fontWeight="700"
          lineHeight="normal"
          color="#112734"
          href="/contacto"
        >
          Contacto
        </Link>
        <Link
          as={NextLink}
          fontSize="14px"
          fontWeight="700"
          lineHeight="normal"
          color="#112734"
          href="/ubicacion"
        >
          Ubicación
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
