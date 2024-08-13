import Form from "../components/Form";
import useSignupForm from "../hooks/signup/use-signup-form";
import useHandleSignup from "../hooks/signup/use-handle-signup";
import { useDisclosure } from "@mantine/hooks";
import { SIGNUP_FORM_FIELD, SIGNUP_FORM_PLACEHOLDER } from "../utils/constant";
import {
  Button,
  Flex,
  Modal,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";

const style: React.CSSProperties = {
  height: "22rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "3.5rem",
};

const SignupModal = () => {
  const signupForm = useSignupForm();
  const handleSignup = useHandleSignup();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex>
      <Modal opened={opened} onClose={close} size="30rem" centered radius="lg">
        <Text fz="3rem" fw={700} c="primary.9" ta="center">
          Join Twitter Now
        </Text>
        <Form handleLogin={signupForm.onSubmit(handleSignup)} style={style}>
          <Flex gap="1rem" direction="column">
            <TextInput
              w="20rem"
              size="md"
              placeholder={SIGNUP_FORM_PLACEHOLDER.username}
              {...signupForm.getInputProps(SIGNUP_FORM_FIELD.username)}
            />
            <TextInput
              w="20rem"
              size="md"
              placeholder={SIGNUP_FORM_PLACEHOLDER.email}
              {...signupForm.getInputProps(SIGNUP_FORM_FIELD.email)}
            />
            <PasswordInput
              w="20rem"
              size="md"
              placeholder={SIGNUP_FORM_PLACEHOLDER.password}
              {...signupForm.getInputProps(SIGNUP_FORM_FIELD.password)}
            />
          </Flex>
          <Button type="submit" size="md" w="8rem" color="primary.5">
            Signup
          </Button>
        </Form>
      </Modal>
      <Button onClick={open} size="lg">
        Signup
      </Button>
    </Flex>
  );
};

export default SignupModal;
