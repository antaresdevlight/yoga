import { Flex, Text } from "@chakra-ui/react";

import TopSection from "@/src/sections/TopSection";
import BenefitsSection from "@/src/sections/BenefitsSection";
import ChallengeSection from "@/src/sections/ChallengeSection";
import CoursesSection from "@/src/sections/CoursesSection";
import TeachersSection from "@/src/sections/TeachersSection";
import EmpowermentSection from "@/src/sections/EmpowermentSection";
import ImageAndCardSection from "@/src/sections/ImageAndCardSection";

function Home() {
  return (
    <Flex direction="column" bg="#f5f5f5">
      <TopSection />

      <CoursesSection />

      <EmpowermentSection />

      <TeachersSection />

      <ImageAndCardSection />

      <BenefitsSection />

      <ChallengeSection />
    </Flex>
  );
}

export default Home;
