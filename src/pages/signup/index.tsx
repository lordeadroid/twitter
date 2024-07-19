import Form from "../../components/Form";
import Page from "../../components/Page";
import Heading from "../../components/Heading";
import CreateButton from "../../components/CreateButton";
import useSignupForm from "../../hooks/signup/use-signup-form";
import useHandleSignup from "../../hooks/signup/use-handle-signup";
import { Link } from "react-router-dom";
import { PATH, SIZE } from "../../utils/constant";
import { Flex, PasswordInput, Text, TextInput } from "@mantine/core";

const SignupPage = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5vh",
  };

  const signupForm = useSignupForm();
  const handleSignup = useHandleSignup();

  return (
    <Page height="100vh" justify="center" align="center">
      <Heading
        text="Join Twitter Now"
        fontSize="3rem"
        fontWeight={700}
        color="primary.9"
        width="25rem"
      />
      <Form handleLogin={signupForm.onSubmit(handleSignup)} style={style}>
        <Flex gap={"2vh"} direction={"column"}>
          <TextInput
            w={"23rem"}
            size={SIZE.medium}
            placeholder="email"
            {...signupForm.getInputProps("email")}
          />
          <PasswordInput
            w={"23rem"}
            size={SIZE.medium}
            placeholder="password"
            {...signupForm.getInputProps("password")}
          />
        </Flex>
        <CreateButton
          type="submit"
          value="Submit"
          size={SIZE.medium}
          width={"8rem"}
          color="primary.5"
        />
      </Form>
      <Flex gap={SIZE.extraSmall}>
        <Text>Already have an account?</Text>
        <Link to={PATH.login}>Login</Link>
      </Flex>
    </Page>
  );
};

export default SignupPage;
