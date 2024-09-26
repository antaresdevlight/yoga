import { Flex, Text, Input, Button } from "@chakra-ui/react";
import Image from "next/image";
import mapa from "src/assets/mapa.png";
import yogaTamarindo from "src/assets/yogaTamarindo.jpg";

function Location() {
  return (
    <Flex
      paddingLeft="100px"
      paddingRight="100px"
      paddingTop="50px"
      paddingBottom="50px"
      
      gap="100px"
      justifyContent="center"
    >
      <Flex direction="column" gap="10px">
        <Text
          color="#BA68C8"
          fontSize="30px"
          fontWeight="600"
          lineHeight="normal"
        >
          Get in touch
        </Text>
        <Text fontSize="17px" fontWeight="400" lineHeight="normal">
          We are here for you! How can we help?
        </Text>

        <Text
          marginTop="20px"
          fontSize="17px"
          fontWeight="400"
          lineHeight="normal"
        >
          We are here for you! How can we help?
        </Text>

        <Flex w="300px" h="350px"  marginTop="40px">
          <Image src={yogaTamarindo} width={300} height={350} alt="" />
        </Flex>
      </Flex>

      <Flex
        direction="column"
        gap="20px"
        marginTop="20px"
        boxShadow="10px 10px 30px -3px rgba(0,0,0,0.75)"
        borderRadius="10px"
        overflow="hidden"
      >
        <Image src={mapa} width={400} height={450} alt="" />
      </Flex>
    </Flex>
  );
}

export default Location;
