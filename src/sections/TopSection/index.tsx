import { Flex } from "@chakra-ui/react";

import headerBG from "src/assets/headerBG.png";

function TopSection() {
  return (
    <Flex
      w="1440px"
      h="773px"
      backgroundImage={`url(${headerBG.src})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    ></Flex>
  );
}

export default TopSection;
