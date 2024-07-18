import { Button, Flex, PasswordInput, Text, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
import { PATH, SIZE } from "../../utils/constant";
import useLoginForm from "../../hooks/login/use-login-form";
import useHandleLogin from "../../hooks/login/use-handle-login";
import Heading from "../../components/Heading";
import Page from "../../components/Page";
import Form from "../../components/Form";

const LoginPage = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
  };
  const loginForm = useLoginForm();
  const handleLogin = useHandleLogin();

  return (
    <Page height="100vh">
      <Heading content="Login to Twitter" fontSize="3rem" fontWeight={700} />
      <Form handleLogin={loginForm.onSubmit(handleLogin)} style={style}>
        <Flex direction={"column"} gap={SIZE.large}>
          <TextInput
            w={"24rem"}
            size={SIZE.medium}
            placeholder="email"
            {...loginForm.getInputProps("email")}
          />
          <PasswordInput
            size={SIZE.medium}
            placeholder="password"
            {...loginForm.getInputProps("password")}
          />
        </Flex>
        <Button type="submit" size={SIZE.medium} w={"8rem"}>
          Submit
        </Button>
      </Form>
      <Flex gap={SIZE.extraSmall}>
        <Text>Don't have an account?</Text>
        <Link to={PATH.signup}>Signup</Link>
      </Flex>
    </Page>
  );
};

export default LoginPage;
