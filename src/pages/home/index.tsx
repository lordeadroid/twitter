import { Text } from "@mantine/core";
import useLoginStore from "../../context/login-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../utils/constant";

const HomePage = () => {
  const navigate = useNavigate();
  const loggedIn = useLoginStore((state) => state.loggedIn);

  useEffect(() => {
    if (!loggedIn) {
      navigate(PATH.home);
    }
  }, [loggedIn, navigate]);

  return <Text>HomePage</Text>;
};

export default HomePage;
