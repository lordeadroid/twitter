import { Button, Flex, PasswordInput, Text, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import { PATH, SIZE } from "../../Utils/constant";
import useLoginForm from "../../Hooks/login/useLoginForm";
import useHandleLogin from "../../Hooks/login/useHandleLogin";

const LoginPage = () => {
  const signupForm = useLoginForm();
  const handleLogin = useHandleLogin();

  return (
    <Flex
      direction={"column"}
      gap={"4rem"}
      align={"center"}
      p={SIZE.extraLarge}
    >
      <Text size={"2.5rem"} fw={700}>
        Welcome to Twitter
      </Text>
      <form
        onSubmit={signupForm.onSubmit(handleLogin)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <Flex direction={"column"} gap={SIZE.large}>
          <TextInput
            w={"24rem"}
            size={SIZE.medium}
            placeholder="email"
            {...signupForm.getInputProps("email")}
          />
          <PasswordInput
            size={SIZE.medium}
            placeholder="password"
            {...signupForm.getInputProps("password")}
          />
        </Flex>
        <Button type="submit" size={SIZE.medium} w={"8rem"}>
          Submit
        </Button>
      </form>
      <Flex gap={SIZE.extraSmall}>
        <Text>Don't have an account?</Text>
        <Link to={PATH.signup}>Signup</Link>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
