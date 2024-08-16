import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TweetsPanel from "../../components/tweets-panel";
import { EMPTYSTRING, PATH } from "../../utils/constant";
import useLoginStore from "../../context/use-login-store";

const HomePage = () => {
  const navigate = useNavigate();
  const UID = useLoginStore((state) => state.UID);

  useEffect(() => {
    if (UID === EMPTYSTRING) {
      navigate(PATH.auth);
    }
  }, [UID, navigate]);

  return <TweetsPanel />;
};

export default HomePage;
