import { Flex, Text } from "@chakra-ui/react";

const styles = {
  header: {
    w: "100%",
    h: "90px",
    bg: "blue.200",
  },
};

function Header() {
  return (
    <Flex {...styles.header}>
      <Text>Header</Text>
    </Flex>
  );
}

export default Header;
