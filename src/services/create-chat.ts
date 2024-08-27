import db, { addDoc, collection, doc, setDoc } from "./db";
import { DB_NAME } from "../utils/constant";

export const createChat = async (user1: string, user2: string) => {
  try {
    await setDoc(doc(db, DB_NAME.chats), {
      participants: [user1, user2],
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error adding document: ", error);
  }
};

export const createMessage = async (
  chatID: string,
  sender: string,
  text: string
) => {
  try {
    await addDoc(collection(db, DB_NAME.messages), {
      chatID,
      sender,
      text,
      timestamp: Date.now(),
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error adding document: ", error);
  }
};
