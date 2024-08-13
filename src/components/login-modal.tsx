import Form from "./Form";
import useLoginForm from "../hooks/login/use-login-form";
import useHandleLogin from "../hooks/login/use-handle-login";
import { useDisclosure } from "@mantine/hooks";
import { LOGIN_FORM_FIELD, LOGIN_FORM_PLACEHOLDER } from "../utils/constant";
import {
  Button,
  Flex,
  Modal,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";

const style: React.CSSProperties = {
  height: "20rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "3.5rem",
};

const LoginModal = () => {
  const loginForm = useLoginForm();
  const handleLogin = useHandleLogin();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex>
      <Modal opened={opened} onClose={close} size="30rem" centered radius="lg">
        <Text fz="3rem" fw={700} c="primary.9" ta="center">
          Login To Twitter
        </Text>
        <Form handleLogin={loginForm.onSubmit(handleLogin)} style={style}>
          <Flex gap="1rem" direction="column">
            <TextInput
              w="20rem"
              size="md"
              placeholder={LOGIN_FORM_PLACEHOLDER.email}
              {...loginForm.getInputProps(LOGIN_FORM_FIELD.email)}
            />
            <PasswordInput
              w="20rem"
              size="md"
              placeholder={LOGIN_FORM_PLACEHOLDER.password}
              {...loginForm.getInputProps(LOGIN_FORM_FIELD.password)}
            />
          </Flex>
          <Button size="md" w="8rem" color="primary.6">
            Login
          </Button>
        </Form>
      </Modal>
      <Button onClick={open} size="lg">
        Login
      </Button>
    </Flex>
  );
};

export default LoginModal;
