import { Button, Flex, PasswordInput, Text, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import useSignupForm from "../../hooks/signup/use-signup-form";
import useHandleSignup from "../../hooks/signup/use-handle-signup";
import { PATH, SIZE } from "../../utils/constant";

const SignupPage = () => {
  const signupForm = useSignupForm();
  const handleSignup = useHandleSignup();

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
        onSubmit={signupForm.onSubmit(handleSignup)}
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
        <Text>Already have an account?</Text>
        <Link to={PATH.login}>Login</Link>
      </Flex>
    </Flex>
  );
};

export default SignupPage;
