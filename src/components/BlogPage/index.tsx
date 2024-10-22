import { Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import imagen2 from "src/assets/imagen2.png";
import MainButton from "../MainButton";

function BlogPage() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      paddingBottom="70px"
      paddingTop="50px"
      flexDirection="column"
      gap="30px"
    >
      <Flex>
        <Flex direction="column" gap="25px" justifyContent="center" w="500px">
          <Text
            fontSize="30px"
            fontWeight="600"
            lineHeight="normal"
            color="#FFA688"
          >
            ABOUT ME
          </Text>
          <Text fontSize="18px" fontWeight="400" lineHeight="normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </Text>
          <Text fontSize="18px" fontWeight="400" lineHeight="normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          
        </Flex>
      </Flex>

      <Image src={imagen2} width={554} height={354} alt="imagen2" />

      <Flex>
        <Flex direction="column" gap="25px" justifyContent="center" w="500px">
          <Text
            fontSize="30px"
            fontWeight="600"
            lineHeight="normal"
            color="#FFA688"
          >
            ABOUT ME
          </Text>
          <Text fontSize="18px" fontWeight="400" lineHeight="normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </Text>
          <Text fontSize="18px" fontWeight="400" lineHeight="normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          
        </Flex>
      </Flex>


      <Flex gap="20px" paddingBottom="50px">
      <Image src={imagen2} width={300} height={200} alt="imagen2" />
      <Image src={imagen2} width={300} height={200} alt="imagen2" />
      </Flex>

       <MainButton text1={"Texto"} color={"purple"}/>
    </Flex>
  );
}

export default BlogPage;
