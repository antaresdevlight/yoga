import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import imagen4 from "src/assets/imagen4.png";

function VerticalImage() {
    return(
        <Flex border="1px" w="458px" h="574px">
            <Image src={imagen4} width={458} height={574} alt="" />
        </Flex>
    )
}

export default VerticalImage