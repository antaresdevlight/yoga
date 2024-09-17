import { Flex } from "@chakra-ui/react";

import Header from "@/src/components/Header";
import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import MainButton from "@/src/components/MainButton";

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
        alignItems="center"
      >
        <Header />

        <Flex
          direction="column"
          maxW="1000px"
          alignItems="center"
          marginTop={{ base: "50px", md: "80px", lg: "100px" }}
        >
          <HeadingText />

          <SubText />

          <MainButton />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TopSection;
