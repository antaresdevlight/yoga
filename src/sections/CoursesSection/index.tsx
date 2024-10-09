import { Flex, Tooltip } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import CourseCard from "@/src/components/CourseCard";

function CoursesSection() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="40px">
        <HeadingText  text1={"Clases"}/>
        <SubText text1={"Shala de yoga holística para tu sanación"}/>

        <Flex
          direction={{ base: "column", lg: "row" }}
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
          gap={{ base: "30px", md: "20px" }}
          border="1px"
        >
          <CourseCard name={"Clases grupales"} />

          <CourseCard name={"Clases especiales"}/>

          <CourseCard name={"Talleres"}/>

          <CourseCard  name={"Retiros"}/>

          <CourseCard  name={"Testimonios"}/>

          <CourseCard  name={"Eventos"}/>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CoursesSection;
