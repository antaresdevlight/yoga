import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import CourseCard from "@/src/components/CourseCard";

function CoursesSection() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="40px">
        <HeadingText />
        <SubText />

        <Flex alignItems="center" justifyContent="space-between" border="1px">
          <CourseCard />

          <CourseCard />

          <CourseCard />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CoursesSection;
