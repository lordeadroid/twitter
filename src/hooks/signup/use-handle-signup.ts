import { initializeApp } from "firebase/app";
import { THandleSignup } from "../../utils/types";
import FIREBASE_CONFIG from "../../utils/firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { PATH } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import useLoginStore from "../../context/use-login-store";
import { useEffect } from "react";

const useHandleSignup = () => {
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

  const handleSignup: THandleSignup = async (values) => {
    const { email, password } = values;

    await createUserWithEmailAndPassword(auth, email, password);
    updateEmail(email);
    updateLoginStatus();
    navigate(PATH.home);
  };

  return handleSignup;
};

export default useHandleSignup;
