import { Divider, Flex } from "@mantine/core";
import useLoginStore from "../../context/use-login-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EMPTYSTRING, PATH } from "../../utils/constant";
import useHandleLogout from "../../hooks/use-handle-logout";
import Page from "../../components/Page";
import ProfilePanel from "../../components/profile-panel";
import TweetsPanel from "../../components/tweets-panel";
import NavPanel from "../../components/nav-panel";

const HomePage = () => {
  const navigate = useNavigate();
  const UID = useLoginStore((state) => state.UID);
  const handleLogout = useHandleLogout();

  useEffect(() => {
    if (UID === EMPTYSTRING) {
      navigate(PATH.login);
    }
  }, [UID, navigate]);

  return (
    <Page width="100vw" height="100vh">
      <Flex direction={"row"} justify={"space-between"} h={"inherit"}>
        <NavPanel width="20%" />
        <Divider orientation="vertical" />
        <TweetsPanel width="50%" />
        <Divider orientation="vertical" />
        <ProfilePanel width="30%" handleLogout={handleLogout} />
      </Flex>
    </Page>
  );
};

export default HomePage;
