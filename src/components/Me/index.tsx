import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import imagen3 from "src/assets/imagen3.png"

function Me() {
  return (
    <Flex paddingBottom="50px" paddingTop="50px" alignItems="center" justifyContent="center" gap="100px">
      <Flex direction="column">
        <Flex direction="column">
          <Text fontSize="28px" fontWeight="600" lineHeight="normal">
            Hello, I am
          </Text>
          <Text
            fontSize="50px"
            fontWeight="600"
            lineHeight="normal"
            color="#FFA688"
          >
            ABHISHEK
          </Text>
          <Text fontSize="24px" fontWeight="600" lineHeight="normal">
            Lorem ipsum sit dolor amet..
          </Text>
        </Flex>

        <Flex gap="20px" marginTop="50px">
          <Button
            borderRadius="7px"
            w="180px"
            h="40px"
            backgroundColor="#FFA688"
          >
            CURSO
          </Button>
          <Button
            border="1px solid #FFA688"
            color="#FFA688"
            borderRadius="7px"
            w="180px"
            h="40px"
            backgroundColor="black"
          >
            EVENTOS
          </Button>
        </Flex>
      </Flex>

      <Flex>
        <Image src={imagen3} width={250} height={200} alt="imagen3" />
      </Flex>
    </Flex>
  );
}

export default Me;
