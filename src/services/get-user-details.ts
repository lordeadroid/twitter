import db, { collection, getDocs, query } from "./db";
import { TImages } from "../utils/types";
import { DB_NAME } from "../utils/constant";

export type TUser = {
  UID: string;
  username: string;
  images: TImages;
};

const getUserDetails = async (uid: string | null): Promise<TUser[]> => {
  const userQuery = query(collection(db, DB_NAME.users));
  const queryData = await getDocs(userQuery);
  const userDetails = queryData.docs.map((doc) => doc.data()) as TUser[];

  if (uid) {
    const userDetail = userDetails.find(
      (element) => element.UID === uid
    ) as TUser;
    return [userDetail];
  }

  return userDetails;
};

export default getUserDetails;
