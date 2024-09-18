import { Flex, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import mujer from "src/assets/mujer.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function About() {
  return (
    <Flex justifyContent="center" alignItems="center"  paddingBottom="50px" paddingTop="50px" >
      <Flex gap="50px">
        <Image src={mujer} width={300} height={650} alt="mujer" />

        <Flex direction="column" gap="25px" justifyContent="center"  w="500px">
          <Text fontSize="30px" fontWeight="600" lineHeight="normal" color="#FFA688">ABOUT ME</Text>
          <Text  fontSize="18px" fontWeight="400" lineHeight="normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </Text>
          <Text  fontSize="18px" fontWeight="400" lineHeight="normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text  fontSize="18px" fontWeight="400" lineHeight="normal">Follow My work on</Text>
          <Flex gap="30px">
        <Link>
        <FaFacebook style={{ width: "20px", height: "20px" }} />
        </Link>
        <Link>
        <FaInstagramSquare style={{ width: "20px", height: "20px" }} />
        </Link>
        </Flex>
        </Flex>

       
      </Flex>
    </Flex>
  );
}

export default About;
