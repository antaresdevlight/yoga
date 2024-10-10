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
      <CourseCard name={"Clase 1"} color={"yellow"} />
      <CourseCard name={"Clase 2"} color={"pink.600"}/>
      <CourseCard name={"Clase 3"} color={"blue"}/>
      <CourseCard name={"Clase 4"} color={"green"}/>
      <CourseCard name={"Clase 5"} color={"gray"}/>
      <CourseCard name={"Clase 6"} color={"orange"}/>
      <CourseCard name={"Clase 7"} color={"fuchsia"}/>
      <CourseCard name={"Clase 8"} color={"cyan"}/>
      <CourseCard name={"Clase 9"} color={"black"}/>
    </Flex>
  );
}

export default ClassesGroup;
