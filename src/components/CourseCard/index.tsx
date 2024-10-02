import { Flex, Text } from "@chakra-ui/react";

function CourseCard(props: any) {
  return (
    <Flex
      w={{ base: "300px", md: "360px", lg: "300px", xl: "360px" }}
      h="410px"
      backgroundColor="blue"
      paddingTop="20px"
      direction="column"
    >
      <Flex
        paddingLeft="30px"
        w="150px"
        h="25px"
        fontSize="18px"
        fontWeight="400"
        lineHeight="normal"
        color="#FFF"
      >
        {props.precio}
      </Flex>

      <Flex
        w="279px"
        h="110px"
        margin="0 auto"
        marginTop="100px"
        fontSize="48px"
        fontWeight="700"
        lineHeight="55px"
        color="#FFF"
        textAlign="center"
      >
        {props.name}
      </Flex>

      <Flex
        justifyContent="space-between"
        marginTop="100px"
        fontSize="18px"
        fontWeight="400"
        lineHeight="normal"
        color="#FFF"
        paddingLeft="20px"
        paddingRight="20px"
      >
        <Text>Ver Mas</Text>
        <Text>Reservar</Text>
      </Flex>
    </Flex>
  );
}

export default CourseCard;
