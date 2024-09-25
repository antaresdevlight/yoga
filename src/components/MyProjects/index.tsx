import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import imagen2 from "src/assets/imagen2.png";
import imagen3 from "src/assets/imagen3.png";
import imagen4 from "src/assets/imagen4.png";


function MyProjects() {
  return (
    <Flex
      direction="column"
      paddingBottom="50px"
      paddingTop="50px"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="#FFA688" fontSize="30px" fontWeight="600" marginBottom="50px">
        MY PROJECTS
      </Text>

      <Flex  gap="20px" marginBottom="40px" >
        <Image src={imagen2} width={250} height={150} alt="img1" />
        <Image src={imagen3} width={250} height={150} alt="img1" />
        <Image src={imagen4} width={250} height={150} alt="img1" />
      </Flex>

      <Flex gap="20px">
        <Image src={imagen3} width={250} height={150} alt="img1" />
        <Image src={imagen4} width={250} height={150} alt="img1" />
        <Image src={imagen2} width={250} height={150} alt="img1" />
      </Flex>
    </Flex>
  );
}

export default MyProjects;
