import db, { arrayRemove, arrayUnion, doc, updateDoc } from "./db";
import { DB_NAME } from "../utils/constant";
import createID from "../utils/create-id";

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

export const updateRequest = async (
  username: string,
  requesterUsername: string,
  chatID: string
) => {
  const docRef = doc(db, DB_NAME.users, requesterUsername);

  await updateDoc(docRef, {
    friends: arrayUnion({ username, chatID }),
  });
};

export const approveRequest = async (
  username: string,
  requesterUsername: string
) => {
  const docRef = doc(db, DB_NAME.users, username);
  const chatID = createID();

  await updateDoc(docRef, {
    friends: arrayUnion({ username: requesterUsername, chatID }),
  });

  cancelRequest(username, requesterUsername);
  updateRequest(username, requesterUsername, chatID);
};
