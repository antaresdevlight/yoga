import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import CircleImage from "@/src/components/CircleImage";

function TeachersSection() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="40px">
        <HeadingText text1={"Tus Guias"} />
        <SubText />

        <Flex
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={{ base: "30px", md: "0" }}
        >
          <CircleImage />

          <CircleImage />

          <CircleImage />

          <CircleImage />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TeachersSection;
