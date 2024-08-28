import { Flex, Text, Button } from "@chakra-ui/react";

function Footer() {
    return (
        <Flex direction="column" border="1px">
            <Text fontSize="64px">Footer</Text>

            <Flex gap="10px">
                <Button width="250px">Haz click</Button>
                <Button width="250px">Haz click 2</Button>
            </Flex>
            
        </Flex>
    )
}

export default Footer