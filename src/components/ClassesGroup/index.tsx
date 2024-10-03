import { Flex } from "@chakra-ui/react";
import CourseCard from "../CourseCard";

function ClassesGroup() {
  return (
    <Flex
      flexWrap="wrap"
      gap="30px"
      alignItems="center"
      justifyContent="center"
    >
      <CourseCard name={"Clase 1"} />
      <CourseCard name={"Clase 2"} />
      <CourseCard name={"Clase 3"} />
      <CourseCard name={"Clase 4"} />
      <CourseCard name={"Clase 5"} />
      <CourseCard name={"Clase 6"} />
      <CourseCard name={"Clase 7"} />
      <CourseCard name={"Clase 8"} />
      <CourseCard name={"Clase 9"} />
    </Flex>
  );
}

export default ClassesGroup;
