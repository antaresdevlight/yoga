import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import img1yoga from "src/assets/img1yoga.png";

function CardOne(props: any) {
  return (
    <Flex w="360px" h="470px" direction="column" alignItems="center">
      <Image src={img1yoga} width={338} height={307} alt="" />
      <Text
        fontSize="36px"
        fontWeight="400"
        lineHeight="normal"
        color="#B6990F"
        textAlign="center"
      >
        {props.titulo}
      </Text>
      <Text
        fontSize="18px"
        fontWeight="400"
        lineHeight="normal"
        color="rgba(17, 39, 52, 0.70)"
        textAlign="center"
        marginTop="30px"
      >
        {props.titulo2}
      </Text>
    </Flex>
  );
}

export default CardOne;
