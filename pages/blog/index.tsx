import BlogPage from "@/src/components/BlogPage"
import { Flex } from "@chakra-ui/react"

function blog() {
    return (
       <Flex justifyContent="center" alignItems="center">
        <BlogPage/>
       </Flex>
    )
}


export default blog