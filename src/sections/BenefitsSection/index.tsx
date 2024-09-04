import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import CardOne from "@/src/components/CardOne";

function BenefitsSection() {
  return (
    <Flex direction="column" py="57px">
      <HeadingText />

      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        gap="30px"
        my="60px"
      >
        <CardOne />

        <CardOne />

        <CardOne />
      </Flex>
    </Flex>
  );
}

export default BenefitsSection;
