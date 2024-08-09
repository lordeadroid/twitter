import { initializeApp } from "firebase/app";
import { THandleSignup } from "../../utils/types";
import FIREBASE_CONFIG from "../../utils/firebase-config";
import { EMPTYSTRING, PATH } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import useLoginStore from "../../context/use-login-store";
import { useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import addUser from "../../services/create-user";

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
      password,
    );

    addUser(user);
    updateUID(user.uid);
    updateUsername(username);

    navigate(PATH.home);
  };

  return handleSignup;
};

export default useHandleSignup;
