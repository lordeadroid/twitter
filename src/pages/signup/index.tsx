import { Button, Flex, PasswordInput, Text, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import useSignupForm from "../../hooks/signup/use-signup-form";
import useHandleSignup from "../../hooks/signup/use-handle-signup";
import { PATH, SIZE } from "../../utils/constant";
import Form from "../../components/Form";
import Page from "../../components/Page";
import Heading from "../../components/Heading";

const SignupPage = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
  };
  const signupForm = useSignupForm();
  const handleSignup = useHandleSignup();

  return (
    <Page height="100vh">
      <Heading content="Join Twitter Today" fontSize="3rem" fontWeight={700} />
      <Form handleLogin={signupForm.onSubmit(handleSignup)} style={style}>
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
      </Form>
      <Flex gap={SIZE.extraSmall}>
        <Text>Already have an account?</Text>
        <Link to={PATH.login}>Login</Link>
      </Flex>
    </Page>
  );
};

export default SignupPage;
