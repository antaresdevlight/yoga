import { Flex, Text } from "@chakra-ui/react";

function SubText(props: any) {
  return (
    <Flex justifyContent="center">
      <Text
        fontSize="18px"
        fontWeight="400"
        lineHeight="normal"
        color="rgba(17, 39, 52, 0.70)"
        margin="50px"
      >
        {props.text1}
      </Text>
    </Flex>
  );
}

export default SubText;
