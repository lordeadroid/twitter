import saveUser from "../../services/create-user";
import useLoginStore from "../../context/use-login-store";
import FIREBASE_CONFIG from "../../utils/firebase-config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { THandleSignup } from "../../utils/types";
import { EMPTYSTRING, PATH } from "../../utils/constant";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const useHandleSignup = () => {
  const app = initializeApp(FIREBASE_CONFIG);
  const auth = getAuth(app);
  const updateUsername = useLoginStore((state) => state.updateUsername);
  const navigate = useNavigate();
  const UID = useLoginStore((state) => state.UID);
  const updateUID = useLoginStore((state) => state.updateUID);

  useEffect(() => {
    if (UID !== EMPTYSTRING) {
      navigate(PATH.home);
    }
  }, [UID, navigate]);

  const handleSignup: THandleSignup = async (values) => {
    const { username, email, password } = values;

    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    saveUser(user.uid, username);
    updateUID(user.uid);
    updateUsername(username);

    navigate(PATH.home);
  };

  return handleSignup;
};

export default useHandleSignup;
