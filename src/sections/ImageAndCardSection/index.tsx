import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";

function ImageAndCardSection() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="40px">
        <HeadingText />

        <Flex w="100%" h="500px" border="1px"></Flex>
      </Flex>
    </Flex>
  );
}

export default ImageAndCardSection;
