import { Flex, Text } from "@chakra-ui/react";

import Header from "../src/components/Header";
import FlexExamp from "@/src/components/FlexExamp";
import TextExamp from "@/src/components/TextExamp";
import ButtonExample from "@/src/components/ButtonExample";
import ImageExamp from "@/src/components/ImageExamp";

const styles = {};

function Home() {
  return (
    <Flex direction="column" padding="20px" gap="30px">
      <FlexExamp />

      <TextExamp />

      <ButtonExample />

      <ImageExamp />
    </Flex>
  );
}

export default Home;
