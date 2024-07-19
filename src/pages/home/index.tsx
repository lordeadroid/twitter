import { Flex, Image, Text } from "@mantine/core";
import useLoginStore from "../../context/use-login-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH, SIZE } from "../../utils/constant";
import useHandleLogout from "../../hooks/use-handle-logout";
import CreateButton from "../../components/CreateButton";
import twitterLogo from "/favicon.png";
import SidePanel from "../../components/SidePanel";
import Page from "../../components/Page";

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
    <Page width="100vw">
      <Flex justify="space-between" w={"100%"}>
        <Flex align="center" gap={SIZE.small}>
          <Image src={twitterLogo} alt="Twitter Logo" h={"2.5rem"} />
          <Text fz={"h1"} fw={800}>
            twitter
          </Text>
        </Flex>
        <CreateButton
          size={SIZE.medium}
          handleClick={handleLogout}
          value="Logout"
        />
      </Flex>
      <SidePanel />
    </Page>
  );
};

export default HomePage;
