import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import ClassesGroup from "@/src/components/ClassesGroup";

function Clases() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="80px">
        <HeadingText text1={"Clases"} />
        <SubText text1="Conoce nuestra oferta de clases" />

        <Flex
          w="100%"
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          justifyContent="center"
          mt="10px"
        >
          <ClassesGroup />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Clases;
