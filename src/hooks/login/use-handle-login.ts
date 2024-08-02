import { initializeApp } from "firebase/app";
import FIREBASE_CONFIG from "../../utils/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { EMPTYSTRING, PATH } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { THandleLogin } from "../../utils/types";
import useLoginStore from "../../context/use-login-store";
import { useEffect } from "react";

const useHandleLogin = () => {
  const app = initializeApp(FIREBASE_CONFIG);
  const auth = getAuth(app);
  const updateUID = useLoginStore((state) => state.updateUID);
  const navigate = useNavigate();
  const UID = useLoginStore((state) => state.UID);

  useEffect(() => {
    if (UID !== EMPTYSTRING) {
      navigate(PATH.home);
    }
  }, [UID, navigate]);

  const handleLogin: THandleLogin = async (values) => {
    const { username, password } = values;

    const { user } = await signInWithEmailAndPassword(auth, username, password);
    updateUID(user.uid);
    navigate(PATH.home);
  };

  return handleLogin;
};

export default useHandleLogin;
