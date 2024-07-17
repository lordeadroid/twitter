import { initializeApp } from "firebase/app";
import FIREBASE_CONFIG from "../../utils/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { PATH } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { THandleLogin } from "../../utils/types";

const useHandleLogin = () => {
  const navigate = useNavigate();
  const app = initializeApp(FIREBASE_CONFIG);
  const auth = getAuth(app);

  const handleLogin: THandleLogin = async (values) => {
    const { email, password } = values;

    await signInWithEmailAndPassword(auth, email, password);
    navigate(PATH.home);
  };

  return handleLogin;
};

export default useHandleLogin;
