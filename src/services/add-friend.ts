import db, { arrayUnion, doc, updateDoc } from "./db";
import { DB_NAME } from "../utils/constant";

const addFriend = async (requester: string, requestee: string) => {
  const docRef = doc(db, DB_NAME.users, requester);

  await updateDoc(docRef, {
    requested: arrayUnion(requestee),
  });
};

export default addFriend;
