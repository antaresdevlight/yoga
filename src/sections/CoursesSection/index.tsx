import NextLink from "next/link";
import { Flex, Tooltip, Link } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import CourseCard from "@/src/components/CourseCard";

function CoursesSection() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="40px">
        <HeadingText text1={"Clases"} />
        <SubText text1={"Shala de yoga holística para tu sanación"} />

        <Flex
          direction={{ base: "column", lg: "row" }}
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
          gap={{ base: "30px", md: "20px" }}
        >
          <Link
            as={NextLink}
            href="/clases"
            _hover={{ textDecoration: "none" }}
          >
            <CourseCard name={"Clases grupales"} color="iOrange" />
          </Link>

          <CourseCard name={"Clases especiales"} color="iOrange" />

          <CourseCard name={"Talleres"} color="iGreen" />

          <CourseCard name={"Retiros"} color="iPurple" />

          <CourseCard name={"Testimonios"} color="iRed" />

          <CourseCard name={"Eventos"} color="iPurple" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CoursesSection;
