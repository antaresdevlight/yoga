import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import imagen3 from "src/assets/imagen3.png";

function CircleImage() {
    return (
        <Flex borderRadius="full" border="1px" w="237px" h="237px" overflow="hidden">
          <Image src={imagen3} width={237} height={237} alt="imagen3"/>
        </Flex>
    )
}

export default CircleImage