import { DB } from "../utils/constant";
import db, { collection, addDoc } from "./db";

const updateTweets = async (username: string, message: string) => {
  try {
    await addDoc(collection(db, DB.tweets), {
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
