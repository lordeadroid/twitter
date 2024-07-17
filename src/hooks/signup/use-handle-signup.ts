import { initializeApp } from "firebase/app";
import { THandleSignup } from "../../utils/types";
import FIREBASE_CONFIG from "../../utils/firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { PATH } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import useLoginStore from "../../context/login-store";

const useHandleSignup = () => {
  const navigate = useNavigate();
  const app = initializeApp(FIREBASE_CONFIG);
  const auth = getAuth(app);
  const updateEmail = useLoginStore((state) => state.updateEmail);

  const handleSignup: THandleSignup = async (values) => {
    const { email, password } = values;

    await createUserWithEmailAndPassword(auth, email, password);
    updateEmail(email);
    navigate(PATH.home);
  };

  return handleSignup;
};

export default useHandleSignup;
