import { DB } from "../utils/constant";
import db, { collection, addDoc } from "./db";

const updateTweets = async (UID: string, username: string, message: string) => {
  try {
    await addDoc(collection(db, DB.tweets), {
      UID,
      username,
      message,
      timestamp: Date.now(),
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error adding document: ", error);
  }
};

export default updateTweets;
