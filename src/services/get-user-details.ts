import db, { collection, getDocs, query, where } from "./db";
import { TImages } from "../utils/types";
import { DB_NAME } from "../utils/constant";

type TUser = {
  UID: string;
  username: string;
  images: TImages;
};

const getUserDetails = async (uid: string): Promise<TUser> => {
  const tweetsQuery = query(
    collection(db, DB_NAME.users),
    where("UID", "==", uid)
  );

  const queryData = await getDocs(tweetsQuery);
  const [userDetails] = queryData.docs.map((doc) => doc.data() as TUser);

  return userDetails;
};

export default getUserDetails;
