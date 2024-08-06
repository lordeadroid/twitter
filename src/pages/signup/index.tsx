import Form from "../../components/Form";
import Page from "../../components/Page";
import Heading from "../../components/Heading";
import Button from "../../components/button";
import useSignupForm from "../../hooks/signup/use-signup-form";
import useHandleSignup from "../../hooks/signup/use-handle-signup";
import { Link } from "react-router-dom";
import {
  SIGNUP_FORM_FIELD,
  PATH,
  SIZE,
  SIGNUP_FORM_PLACEHOLDER,
} from "../../utils/constant";
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
            style={{ fontStyle: "italic" }}
            placeholder={SIGNUP_FORM_PLACEHOLDER.username}
            {...signupForm.getInputProps(SIGNUP_FORM_FIELD.username)}
          />

          <TextInput
            w={"23rem"}
            size={SIZE.medium}
            style={{ fontStyle: "italic" }}
            placeholder={SIGNUP_FORM_PLACEHOLDER.email}
            {...signupForm.getInputProps(SIGNUP_FORM_FIELD.email)}
          />
          <PasswordInput
            w={"23rem"}
            size={SIZE.medium}
            style={{ fontStyle: "italic" }}
            placeholder={SIGNUP_FORM_PLACEHOLDER.password}
            {...signupForm.getInputProps(SIGNUP_FORM_FIELD.password)}
          />
        </Flex>
        <Button
          type="submit"
          value="Sign Up"
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
