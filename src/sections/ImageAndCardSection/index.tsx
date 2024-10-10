import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import VerticalImage from "@/src/components/VerticalImage";
import SummaryCard from "@/src/components/SummaryCard";

function ImageAndCardSection() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="40px" gap="30px">
        <HeadingText text1={"Retiro RE COR DARTE"} />

        <Flex
          w="100%"
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={{ base: "30px", md: "0" }}
        >
          <VerticalImage />
          <SummaryCard
            text1={"ReCorDarte"}
            text2={"Retiro"}
            text3={"22-24 Noviembre"}
            text4={"Bosques del Zembo Huasca"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ImageAndCardSection;
