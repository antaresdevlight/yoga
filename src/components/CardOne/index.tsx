import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import img1yoga from "src/assets/img1yoga.png";

function CardOne() {
  return (
    <Flex
      w="360px"
      h="470px"
      border="1px"
      direction="column"
      alignItems="center"
    >
      <Image src={img1yoga} width={338} height={307} alt="" />
      <Text
        fontSize="36px"
        fontWeight="400"
        lineHeight="normal"
        color="#B6990F"
        textAlign="center"
      >
        World Class Teacher
      </Text>
      <Text
        fontSize="18px"
        fontWeight="400"
        lineHeight="normal"
        color="rgba(17, 39, 52, 0.70)"
        textAlign="center"
        marginTop="30px"
      >
        Experience the depth of knowledge from experts across all areas of yoga
      </Text>
    </Flex>
  );
}

export default CardOne;
