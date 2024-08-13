import db, { collection, getDocs, query, where } from "./db";
import { DB_NAME } from "../utils/constant";

type TUser = {
  UID: string;
  username: string;
};

const findUsername = async (uid: string): Promise<string> => {
  const tweetsQuery = query(
    collection(db, DB_NAME.users),
    where("UID", "==", uid)
  );

  const queryData = await getDocs(tweetsQuery);
  const [user] = queryData.docs.map((doc) => doc.data() as TUser);

  return user.username;
};

export default findUsername;
