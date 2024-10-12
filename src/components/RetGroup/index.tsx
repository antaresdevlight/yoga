import { Flex } from "@chakra-ui/react";
import RetCard from "../RetCard";

function RetGroup() {
    return (
        <Flex flexWrap="wrap"
        gap="30px"
        alignItems="center"
        justifyContent="center">
            <RetCard/>
            <RetCard/>
            <RetCard/>
            <RetCard/>
            <RetCard/>
            <RetCard/>
        </Flex>
    )
}

export default RetGroup