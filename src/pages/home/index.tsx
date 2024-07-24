import { Divider, Flex, Group, Image } from "@mantine/core";
import useLoginStore from "../../context/use-login-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH, SIZE } from "../../utils/constant";
import useHandleLogout from "../../hooks/use-handle-logout";
import CreateButton from "../../components/CreateButton";
import twitterLogo from "/favicon.png";
import SidePanel from "../../components/SidePanel";
import Page from "../../components/Page";
import Heading from "../../components/Heading";
import Tweets from "../../components/tweets";

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
    <Page width="100vw" height="100vh">
      <Flex direction={"row"} justify={"space-between"} h={"inherit"}>
        <Flex w={"20%"} direction={"column"}>
          <Group align="center" gap={SIZE.extraLarge} p={SIZE.extraLarge}>
            <Image src={twitterLogo} alt="Twitter Logo" h={"2.5rem"} />
            <Heading text="twitter" fontWeight={800} fontSize="2.5rem" />
          </Group>
          <SidePanel />
        </Flex>
        <Divider orientation="vertical" />
        <Flex w={"55%"} h={"100%"}>
          <Tweets />
        </Flex>
        <Divider orientation="vertical" />
        <Flex
          w={"25%"}
          direction={"column"}
          p={SIZE.extraLarge}
          gap={SIZE.extraLarge}
        >
          <CreateButton
            width="10vw"
            size={SIZE.medium}
            handleClick={handleLogout}
            value="Logout"
          />
        </Flex>
      </Flex>
    </Page>
  );
};

export default HomePage;
