import { Divider, Flex } from "@mantine/core";
import useLoginStore from "../../context/use-login-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../utils/constant";
import Page from "../../components/Page";
import ProfilePanel from "../../components/profile-panel";
import TweetsPanel from "../../components/tweets-panel";
import NavPanel from "../../components/nav-panel";

const HomePage = () => {
  const navigate = useNavigate();
  const loginStatus = useLoginStore((state) => state.loginStatus);

  useEffect(() => {
    if (!loginStatus) {
      navigate(PATH.login);
    }
  }, [loginStatus, navigate]);

  return (
    <Page width="100vw" height="100vh">
      <Flex direction={"row"} justify={"space-between"} h={"inherit"}>
        <NavPanel width="20%" />
        <Divider orientation="vertical" />
        <TweetsPanel width="50%" />
        <Divider orientation="vertical" />
        <ProfilePanel width="30%" />
      </Flex>
    </Page>
  );
};

export default HomePage;
