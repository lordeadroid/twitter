import { Button, Flex, Text } from "@mantine/core";
import useLoginStore from "../../context/use-login-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH, SIZE } from "../../utils/constant";
import useHandleLogout from "../../hooks/use-handle-logout";

const HomePage = () => {
  const navigate = useNavigate();
  const loginStatus = useLoginStore((state) => state.loginStatus);
  const handleLogout = useHandleLogout();

  useEffect(() => {
    if (!loginStatus) {
      navigate(PATH.login);
    }
  }, [loginStatus, navigate]);

  return (
    <Flex justify="space-between" w={"100%"} p={SIZE.extraLarge}>
      <Text>HomePage</Text>
      <Button onClick={handleLogout}>Logout</Button>
    </Flex>
  );
};

export default HomePage;
