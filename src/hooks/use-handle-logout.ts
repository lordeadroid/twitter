import { useNavigate } from "react-router-dom";
import useLoginStore from "../context/use-login-store";
import { PATH } from "../utils/constant";

const useHandleLogout = () => {
  const navigate = useNavigate();
  const updateLoginStatus = useLoginStore((state) => state.updateLoginStatus);
  const resetEmail = useLoginStore((state) => state.resetEmail);

  const handleLogout = () => {
    updateLoginStatus();
    resetEmail();
    navigate(PATH.login);
  };

  return handleLogout;
};

export default useHandleLogout;
