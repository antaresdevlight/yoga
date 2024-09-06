import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import HorizontalImage from "@/src/components/HorizontalImage";
import MainButton from "@/src/components/MainButton";

function EmpowermentSection() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="40px">
        <HeadingText />
        <SubText />

        <Flex justifyContent="space-between" border="1px">
          <Flex direction="column">
            <HeadingText />
            <SubText />
            <MainButton />
          </Flex>

          <HorizontalImage />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default EmpowermentSection;
