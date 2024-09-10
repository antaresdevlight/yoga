import { Flex, Text } from "@chakra-ui/react";

function CourseCard() {
  return (
    <Flex
      w="360px"
      h="410px"
      border="1px"
      backgroundColor="blue"
      paddingTop="20px"
      direction="column"
    >
      <Flex
        border="1px"
        paddingLeft="30px"
        w="150px"
        h="25px"
        fontSize="18px"
        fontWeight="400"
        lineHeight="normal"
        color="#FFF"
      >
        Course| $120
      </Flex>

      <Flex
        w="279px"
        h="110px"
        margin="0 auto"
        marginTop="100px"
        
        border="1px"
        fontSize="48px"
        fontWeight="700"
        lineHeight="55px"
        
        color="#FFF"
        textAlign="center"
      >
        7 days of Relation
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
