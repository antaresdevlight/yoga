import { Flex } from "@chakra-ui/react";

import HeadingText from "@/src/components/HeadingText";
import SubText from "@/src/components/SubText";
import FormInput from "@/src/components/FormInput";

function Contact() {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="100%" maxW="1140px" direction="column" py="60px">
        <HeadingText />
        <SubText />

        <Flex
          w="100%"
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          justifyContent="center"
          mt="10px"
        >
          <FormInput />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Contact;
