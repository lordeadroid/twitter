import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {});

  const handleSubmit = async (values: TLoginFormData) => {
    const { username, password } = values;

    if (!userExist(entries, username)) {
      notifyUser(NOTIFICATION_TYPE.login, NOTIFICATION_MSG.login.username);
      return;
    }

    const hashedPassword: string = await hashString(password);
    if (!isVerifiedUser(entries, username, hashedPassword)) {
      notifyUser(NOTIFICATION_TYPE.login, NOTIFICATION_MSG.login.password);
      return;
    }

    notifyUser(NOTIFICATION_TYPE.login, NOTIFICATION_MSG.login.success);
    updateUsername(username); // add user in login-store
    navigate(PATH.home);
  };

  const form: UseFormReturnType<TLoginFormData> = useForm({
    mode: "uncontrolled",
    initialValues: INITIALLOGINFORM,
    validate: loginFormValidator,
  });

  return (
    <Flex gap={SIZE.large}>
      <Flex
        direction={"column"}
        gap={"4rem"}
        align={"center"}
        p={SIZE.extraLarge}
      >
        <Text size="2.5rem" fw={700}>
          Welcome to AntStack
        </Text>

        <form
          onSubmit={form.onSubmit(handleSubmit)}
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
              size={SIZE.medium}
              w={"24rem"}
              placeholder="username"
              {...form.getInputProps("username")}
            />
            <PasswordInput
              size={SIZE.medium}
              placeholder="password"
              {...form.getInputProps("password")}
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
      <Image src={backgroundImage} alt="login page" />
    </Flex>
  );
};

export default LoginPage;
