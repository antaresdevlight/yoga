import { Flex, Text } from "@chakra-ui/react";

import Me from "@/src/components/Me";
import About from "@/src/components/About";
import MyWork from "@/src/components/MyWork";

function Home() {
  return (
    <Flex direction="column" bg="#f5f5f5">
      <Me />

      <About />

      <MyWork />
    </Flex>
  );
}

export default Home;
