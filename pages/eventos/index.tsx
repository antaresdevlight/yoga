import { Flex } from "@chakra-ui/react";
import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import EventGroup from "@/src/components/EventGroup";

function Eventos() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="80px">
        <HeadingText text1={"Eventos"} />
        <SubText text1="Conoce nuestra oferta de Eventos" />

        <Flex
          w="100%"
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          justifyContent="center"
          mt="10px"
        >
          <EventGroup />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Eventos;
