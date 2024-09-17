import { Flex } from "@chakra-ui/react";

import Header from "@/src/components/Header";

import headerBG from "src/assets/headerBG.png";

function TopSection() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex
        w="100%"
        maxW="3000px"
        h="773px"
        backgroundImage={`url(${headerBG.src})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        direction="column"
      >
        <Header />
      </Flex>
    </Flex>
  );
}

export default TopSection;
