import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import imagen4 from "src/assets/imagen4.png";
function SummaryCard(props: any) {
  return (
    <Flex borderRadius="15px" w="555px" direction="column" border="1px">
      <Image src={imagen4} width={555} height={297} alt="imagen4" />

      <Flex
        justifyContent="space-between"
        paddingLeft="18px"
        paddingRight="18px"
        paddingTop="18px"
        paddingBottom="18px"
      >
        <Flex alignItems="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
          >
            <circle cx="22" cy="22" r="22" fill="#F1D44B" />
            <path
              d="M25.428 26.0054L26.572 28.4654C26.572 28.4654 31.7147 29.5574 31.7147 32.1547C31.7147 34 29.4267 34 29.4267 34H23.3334L20.3334 32.3334"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.5719 26.0054L17.4293 28.4654C17.4293 28.4654 12.2853 29.5574 12.2853 32.1547C12.2853 34 14.5733 34 14.5733 34H17.3333L20.3333 32.3334L23.9999 30"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 27.2345C10 27.2345 12.8573 26.6199 14.572 26.0052C16.2853 17.3945 21.4267 18.0092 22 18.0092C22.572 18.0092 27.7147 17.3945 29.428 26.0052C31.1427 26.6185 34 27.2345 34 27.2345"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 15.3333C22.7073 15.3333 23.3856 15.0524 23.8857 14.5523C24.3858 14.0522 24.6667 13.3739 24.6667 12.6667C24.6667 11.9594 24.3858 11.2811 23.8857 10.781C23.3856 10.281 22.7073 10 22 10C21.2928 10 20.6145 10.281 20.1144 10.781C19.6143 11.2811 19.3334 11.9594 19.3334 12.6667C19.3334 13.3739 19.6143 14.0522 20.1144 14.5523C20.6145 15.0524 21.2928 15.3333 22 15.3333Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Text
            margin="10px"
            fontSize="36px"
            fontWeight="400"
            lineHeight="normal"
            color="#112734"
          >
            {props.text1}
          </Text>
        </Flex>

        <Flex>
          <Text
            fontSize="18px"
            fontWeight="700"
            lineHeight="normal"
            color="rgba(17, 39, 52, 0.70"
          >
            {props.text2}
          </Text>
        </Flex>
      </Flex>

      <Flex justifyContent="space-between">
        <Flex w="200px" alignItems="center">
          <Flex
            borderRadius="full"
            w="48px"
            h="48px"
            margin="20px"
            overflow="hidden"
          >
            <Image src={imagen4} width={48} height={48} alt="" />
          </Flex>

          <Flex>
            <Text
              fontSize="18px"
              fontWeight="400"
              lineHeight="normal"
              color="rgba(17, 39, 52, 0.70)"
            >
              {props.text3}
            </Text>
          </Flex>
        </Flex>

        <Flex w="200px" alignItems="center">
          <Flex
            borderRadius="full"
            w="48px"
            h="48px"
            margin="20px"
            overflow="hidden"
          >
            <Image src={imagen4} width={48} height={48} alt="" />
          </Flex>

          <Flex>
            <Text
              fontSize="18px"
              fontWeight="400"
              lineHeight="normal"
              color="rgba(17, 39, 52, 0.70)"
            >
              {props.text4}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SummaryCard;
