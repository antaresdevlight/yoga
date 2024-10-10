import { Flex, Button } from "@chakra-ui/react";

function MainButton(props: any) {
  return (
    <Flex>
      <Button
        w={{ base: "300px", md: "360px" }}
        h="68px"
        borderRadius="5px"
        backgroundColor={props.color}
        fontSize="24px"
        fontWeight="700"
        lineHeight="normal"
        color="#FFF"
      >
        {props.text1}
      </Button>
    </Flex>
  );
}

export default MainButton;
