import { Flex, Input, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import imagen4 from "src/assets/imagen4.png";

function FormInput() {
  return (
    <Flex paddingLeft="100px" paddingRight="100px" paddingTop="50px" paddingBottom="50px"  gap="100px" justifyContent="center">
      <Flex direction="column" gap="10px"  >
        <Text
          color="#BA68C8"
          fontSize="30px"
          fontWeight="600"
          lineHeight="normal"
        >
          Get in touch
        </Text>
        <Text fontSize="17px" fontWeight="400" lineHeight="normal">
          We are here for you! How can we help?
        </Text>

         <Flex direction="column" gap="10px" w="422px">
            <Text>Name</Text>
            <Input/>
         </Flex>

         <Flex direction="column" gap="10px"  w="422px">
            <Text>Email</Text>
            <Input/>
         </Flex>

         <Flex direction="column" gap="10px"  w="422px">
            <Text>Messaje</Text>
            <Input height="94px"/>
         </Flex>

         <Flex>
         <Button
        w="422px"
        h="60px"
        borderRadius="5px"
        backgroundColor="#BA68C8"
        fontSize="24px"
        fontWeight="700"
        lineHeight="normal"
        color="#fff"
        marginTop="50px"
      >
        Submit
      </Button>
         </Flex>

      </Flex>

      <Flex direction="column" gap="20px" marginTop="20px">
         <Image src={imagen4} width={500} height={490} alt="" />
         <Text marginTop="30px">545 Mavis Island, IL 99191</Text>
         <Text>+2034 4040 3030</Text>
         <Text>hello@gmail.com</Text>
         </Flex>
    </Flex>
  );
}

export default FormInput;
