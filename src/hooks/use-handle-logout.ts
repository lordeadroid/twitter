import { useNavigate } from "react-router-dom";
import useLoginStore from "../context/use-login-store";
import { EMPTYSTRING, PATH } from "../utils/constant";

const useHandleLogout = () => {
  const navigate = useNavigate();
  const updateUID = useLoginStore((state) => state.updateUID);
  const updateUsername = useLoginStore((state) => state.updateUsername);

  const handleLogout = () => {
    updateUID(EMPTYSTRING);
    updateUsername(EMPTYSTRING);
    navigate(PATH.login);
  };

  return handleLogout;
};

export default useHandleLogout;
