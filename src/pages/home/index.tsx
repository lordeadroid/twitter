import { Divider, Flex } from "@mantine/core";
import useLoginStore from "../../context/use-login-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../utils/constant";
import useHandleLogout from "../../hooks/use-handle-logout";
import Page from "../../components/Page";
import ProfilePanel from "../../components/profile-panel";
import TweetsPanel from "../../components/tweets-panel";
import NavPanel from "../../components/nav-panel";

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
        <NavPanel width="20%" />
        <Divider orientation="vertical" />
        <TweetsPanel width="55%" />
        <Divider orientation="vertical" />
        <ProfilePanel width="25%" handleLogout={handleLogout} />
      </Flex>
    </Page>
  );
};

export default HomePage;
