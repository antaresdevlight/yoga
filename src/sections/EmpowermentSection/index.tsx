import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import HorizontalImage from "@/src/components/HorizontalImage";
import MainButton from "@/src/components/MainButton";

function EmpowermentSection() {
  const router = useRouter();

  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="40px">
        <HeadingText text1="Shala" />
        <SubText text1="Conoce nuestras instalaciones" />

        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          gap={{ base: "30px", md: "0" }}
        >
          <Flex direction="column" alignItems="center">
            <HeadingText />
            <SubText />
            <MainButton
              text1="Ver Ubicación"
              color="iPurple"
              onClick={() => router.push("//ubicacion")}
            />
          </Flex>

          <HorizontalImage />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default EmpowermentSection;
