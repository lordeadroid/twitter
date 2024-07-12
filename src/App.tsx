import "@mantine/core/styles.css";
import { Flex, MantineProvider, Text } from "@mantine/core";
import theme from "./theme";

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Flex>
        <Text>twitter</Text>
      </Flex>
    </MantineProvider>
  );
};

export default App;
