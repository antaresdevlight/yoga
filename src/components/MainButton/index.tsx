import { Flex, Button } from "@chakra-ui/react";

function MainButton() {
  return (
    <Flex>
      <Button
        w="360px"
        h="68px"
        borderRadius="5px"
        backgroundColor="#B6990F"
        fontSize="24px"
        fontWeight="700"
        lineHeight="normal"
        color="#FFF"
      >
        Start your journey
      </Button>
    </Flex>
  )
}

export default MainButton;
