import { initializeApp } from "firebase/app";
import FIREBASE_CONFIG from "../../utils/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { PATH } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { THandleLogin } from "../../utils/types";
import useLoginStore from "../../context/use-login-store";
import { useEffect } from "react";

const useHandleLogin = () => {
  const app = initializeApp(FIREBASE_CONFIG);
  const auth = getAuth(app);
  const updateEmail = useLoginStore((state) => state.updateEmail);
  const navigate = useNavigate();
  const loginStatus = useLoginStore((state) => state.loginStatus);
  const updateLoginStatus = useLoginStore((state) => state.updateLoginStatus);

  useEffect(() => {
    if (loginStatus) {
      navigate(PATH.home);
    }
  }, [loginStatus, navigate]);

  const handleLogin: THandleLogin = async (values) => {
    const { email, password } = values;

    await signInWithEmailAndPassword(auth, email, password);
    updateEmail(email);
    updateLoginStatus();
    navigate(PATH.home);
  };

  return handleLogin;
};

export default useHandleLogin;
