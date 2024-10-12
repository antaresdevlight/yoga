import { Flex } from "@chakra-ui/react";
import EventCard from "../EventCard";

function EventGroup() {
    return(
        <Flex flexWrap="wrap"
        gap="30px"
        alignItems="center"
        justifyContent="center">
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </Flex>
    )
}

export default EventGroup