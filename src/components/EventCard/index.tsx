import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import fresas from "src/assets/fresas.png";

function EventCard() {
  return (
    <Flex
      w="354px"
      borderRadius="20px"
      marginTop="50px"
      marginBottom="50px"
      padding="14px"
      justifyContent="center"
      direction="column"
      gap="24px"
      boxShadow="0px 4px 40px 0px rgba(0, 0, 0, 0.08)"
    >
      <Image src={fresas} width={326} height={268} alt="fresa" />

      <Text>How to make a perfect smoothie at home during lockdown</Text>

      <Flex gap="24px">

      <Flex borderRadius="full" overflow="hidden" w="64px" h="64px">
      <Image src={fresas} width={64} height={64} alt="fresa" />
      </Flex>

      <Flex direction="column">
        <Text>Ajay Kumar</Text>
        <Text>Smoothie maker of the year</Text>
      </Flex>

      </Flex>
    </Flex>
  );
}

export default EventCard;
