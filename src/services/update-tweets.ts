import db, { collection, addDoc } from "./db";

const updateTweets = async (username: string, message: string) => {
  try {
    await addDoc(collection(db, "tweets"), {
      username,
      message,
      date: new Date(),
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export default updateTweets;
