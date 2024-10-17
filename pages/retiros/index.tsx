import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import RetGroup from "@/src/components/RetGroup";

function Retiros() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="80px">
        <HeadingText text1={"Retiros"} />
        <SubText text1="Conoce nuestra oferta de Retiros" />

        <Flex
          w="100%"
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          justifyContent="center"
          mt="10px"
        >
          <RetGroup />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Retiros;
