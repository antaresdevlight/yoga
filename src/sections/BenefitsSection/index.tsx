import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import CardOne from "@/src/components/CardOne";

function BenefitsSection() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="60px">
        <HeadingText />

        <Flex
          w="100%"
          alignItems="center"
          justifyContent="center"
          gap="30px"
          mt="50px"
        >
          <CardOne />

          <CardOne />

          <CardOne />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default BenefitsSection;
