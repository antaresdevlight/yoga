import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import paisaje from "src/assets/paisaje.png";

function RetCard() {
  return (
    <Flex
      borderRadius="20px 20px 0px 0px"
      w="326px"
      overflow="hidden"
      marginBottom="50px"
      marginLeft="50px"
      direction="column"
      boxShadow=" 0px 4px 40px 0px rgba(0, 0, 0, 0.08)"
    >
      <Image src={paisaje} width={326} height={300} alt="paisaje" />

      <Flex direction="column" padding="16px">
        <Text
          color=" var(--Dark-Button-Medium, #6E7491)"
          fontSize="24px"
          fontWeight="600"
        >
          Rawai Beach Phuket
        </Text>
        <Text
          paddingLeft="20px"
          color=" var(--Dark-Button-Medium, #6E7491)"
          fontSize="16px"
          fontWeight="400"
        >
          Aviasales.ru Seaview Phuket office, Phuket, Thailand
        </Text>

        <Flex
          justifyContent="center"
          alignItems="center"
          gap="20px"
          marginBottom="30px"
          marginTop="30px"
        >
          <Flex
            direction="column"
            w="230px"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              color=" var(--Dark-Button-Medium, #6E7491)"
              fontSize="16px"
              fontWeight="400"
            >
              Views
            </Text>
            <Text fontSize="16px" fontWeight="500">
              65,03,099
            </Text>
          </Flex>

          <Flex
            direction="column"
            w="230px"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              color=" var(--Dark-Button-Medium, #6E7491)"
              fontSize="16px"
              fontWeight="400"
            >
              Views
            </Text>
            <Text fontSize="16px" fontWeight="500">
              65,03,099
            </Text>
          </Flex>
        </Flex>

        <Flex justifyContent="center" alignItems="center">
          <Button
            border="1px"
            w="400px"
            backgroundColor="blue.300"
            color="white"
          >
            See Details
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default RetCard;
