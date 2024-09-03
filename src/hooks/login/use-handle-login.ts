import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import FIREBASE_CONFIG from "../../utils/firebase-config";
import useLoginStore from "../../context/use-login-store";
import getUserDetails from "../../services/get-user-details";
import { THandleLogin } from "../../utils/types";
import { EMPTYSTRING, PATH } from "../../utils/constant";
import createNotification from "../../services/create-notification";

const useHandleLogin = () => {
  const navigate = useNavigate();
  const app = initializeApp(FIREBASE_CONFIG);
  const auth = getAuth(app);
  const UID = useLoginStore((state) => state.UID);
  const updateUID = useLoginStore((state) => state.updateUID);
  const updateImages = useLoginStore((state) => state.updateImages);
  const updateUsername = useLoginStore((state) => state.updateUsername);

  useEffect(() => {
    if (UID !== EMPTYSTRING) {
      navigate(PATH.home);
    }
  }, [UID, navigate]);

  const handleLogin: THandleLogin = async (values) => {
    const { email, password } = values;

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const [userDetail] = await getUserDetails(user.uid);

      createNotification("Login", `Welcome ${userDetail.username}`);

      updateUID(user.uid);
      updateUsername(userDetail.username);
      updateImages(userDetail.images);

      navigate(PATH.home);
    } catch (_error) {
      createNotification("Login", "Invalid Credentials");
    }
  };

  return handleLogin;
};

export default useHandleLogin;
