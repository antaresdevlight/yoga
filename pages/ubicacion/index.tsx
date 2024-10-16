import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import Location from "@/src/components/Location";

function Ubicacion() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="60px">
        <HeadingText text1={"Ubicación"} />
        <SubText text1="Visita nuestra shala" />

        <Flex
          w="100%"
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          justifyContent="center"
          mt="10px"
        >
          <Location />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Ubicacion;
