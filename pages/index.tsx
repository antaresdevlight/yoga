import { Flex, Text } from "@chakra-ui/react";

import TopSection from "@/src/sections/TopSection";
import BenefitsSection from "@/src/sections/BenefitsSection";

function Home() {
  return (
    <Flex direction="column">
      <TopSection />

      <BenefitsSection />
    </Flex>
  );
}

export default Home;
