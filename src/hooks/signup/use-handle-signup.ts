import { initializeApp } from "firebase/app";
import { THandleSignup } from "../../utils/types";
import FIREBASE_CONFIG from "../../utils/firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { PATH } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import useLoginStore from "../../context/login-store";
import { useEffect } from "react";

const useHandleSignup = () => {
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

  const handleSignup: THandleSignup = async (values) => {
    const { email, password } = values;

    await createUserWithEmailAndPassword(auth, email, password);
    updateEmail(email);
    setLoggedIn();
    navigate(PATH.home);
  };

  return handleSignup;
};

export default useHandleSignup;
