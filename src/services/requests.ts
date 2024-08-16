import db, { arrayRemove, arrayUnion, doc, updateDoc } from "./db";
import { DB_NAME } from "../utils/constant";

export const addFriend = async (requester: string, requestee: string) => {
  const docRef = doc(db, DB_NAME.users, requester);

  await updateDoc(docRef, {
    requested: arrayUnion(requestee),
  });
};

export const cancelRequest = async (
  username: string,
  requesterUsername: string
) => {
  const docRef = doc(db, DB_NAME.users, username);

  await updateDoc(docRef, {
    requested: arrayRemove(requesterUsername),
  });
};

export const approveRequest = async (
  username: string,
  requesterUsername: string
) => {
  const docRef = doc(db, DB_NAME.users, username);

  await updateDoc(docRef, {
    friends: arrayUnion(requesterUsername),
  });

  cancelRequest(username, requesterUsername);
};
