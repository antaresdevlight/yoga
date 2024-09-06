import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import imagen2 from "src/assets/imagen2.png";

function HorizontalImage() {
    return(
        <Flex>
            <Image src={imagen2} width={554} height={354} alt="imagen2"/> 
        </Flex>
    )
}

export default HorizontalImage