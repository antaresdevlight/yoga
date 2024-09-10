import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import VerticalImage from "@/src/components/VerticalImage";
import SummaryCard from "@/src/components/SummaryCard";

function ImageAndCardSection() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="40px">
        <HeadingText />

        <Flex
          w="100%"
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={{ base: "30px", md: "0" }}
          border="1px"
        >
          <VerticalImage />
          <SummaryCard />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ImageAndCardSection;
