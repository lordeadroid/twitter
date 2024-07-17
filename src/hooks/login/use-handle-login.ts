import { initializeApp } from "firebase/app";
import FIREBASE_CONFIG from "../../utils/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { PATH } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { THandleLogin } from "../../utils/types";
import useLoginStore from "../../context/login-store";
import { useEffect } from "react";

const useHandleLogin = () => {
  const app = initializeApp(FIREBASE_CONFIG);
  const auth = getAuth(app);
  const updateEmail = useLoginStore((state) => state.updateEmail);
  const navigate = useNavigate();
  const loggedIn = useLoginStore((state) => state.loggedIn);
  const setLoggedIn = useLoginStore((state) => state.setLoggedIn);

  useEffect(() => {
    if (!loggedIn) {
      navigate(PATH.home);
    }
  }, [loggedIn, navigate]);

  const handleLogin: THandleLogin = async (values) => {
    const { email, password } = values;

    await signInWithEmailAndPassword(auth, email, password);
    updateEmail(email);
    setLoggedIn();
    navigate(PATH.home);
  };

  return handleLogin;
};

export default useHandleLogin;
