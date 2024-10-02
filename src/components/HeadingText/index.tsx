import { Flex, Text } from "@chakra-ui/react";

function HeadingText(props: any) {
  return (
    <Flex justifyContent="center">
      <Text
        textAlign="center"
        color="#112734"
        fontSize="64px"
        fontWeight="400"
        lineHeight="1"
      >
        

        {props.text1}
      </Text>
    </Flex>
  );
}

export default HeadingText;
