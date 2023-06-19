import { Flex, Text } from "@chakra-ui/react";

import Header from "../src/components/Layout/Header";

const styles = {};

function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Text>Home - page</Text>
    </Flex>
  );
}

export default Home;
