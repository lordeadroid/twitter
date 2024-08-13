import twitterLogo from "/favicon.png";
import LoginModal from "../../components/login-modal";
import { Button, Flex, Image, Text } from "@mantine/core";

const AuthPage = () => {
  return (
    <Flex h="100vh" w="100vw" justify="space-evenly">
      <Flex justify="center" align="center">
        <Image alt="twitter logo" src={twitterLogo} />
      </Flex>
      <Flex direction="column" p="10% 0" gap="xl">
        <Flex direction="column">
          <Text fw={700} fz="4rem">
            Happening now
          </Text>
          <Text fw={500} fz="2rem">
            Join today.
          </Text>
        </Flex>
        <Flex gap="xl">
          <LoginModal />
          <Button>Signup</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AuthPage;
