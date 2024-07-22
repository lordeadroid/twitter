import Form from "../../components/Form";
import Page from "../../components/Page";
import Heading from "../../components/Heading";
import CreateButton from "../../components/CreateButton";
import useLoginForm from "../../hooks/login/use-login-form";
import useHandleLogin from "../../hooks/login/use-handle-login";
import { Link } from "react-router-dom";
import { PATH, SIZE } from "../../utils/constant";
import { Flex, PasswordInput, Text, TextInput } from "@mantine/core";

const LoginPage = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5vh",
  };

  const loginForm = useLoginForm();
  const handleLogin = useHandleLogin();

  return (
    <Page height="100vh" justify="center" align="center">
      <Heading
        text="Login To Twitter"
        fontSize="3rem"
        fontWeight={700}
        color="primary.9"
        width="25rem"
      />
      <Form handleLogin={loginForm.onSubmit(handleLogin)} style={style}>
        <Flex gap={"2vh"} direction={"column"}>
          <TextInput
            w={"23rem"}
            size={SIZE.medium}
            placeholder="email"
            {...loginForm.getInputProps("email")}
          />
          <PasswordInput
            w={"23rem"}
            size={SIZE.medium}
            placeholder="password"
            {...loginForm.getInputProps("password")}
          />
        </Flex>
        <CreateButton
          type="submit"
          value="Login"
          size={SIZE.medium}
          width={"8rem"}
          color="primary.5"
        />
      </Form>
      <Flex gap={SIZE.extraSmall}>
        <Text>Don't have an account?</Text>
        <Link to={PATH.signup}>Signup</Link>
      </Flex>
    </Page>
  );
};

export default LoginPage;
