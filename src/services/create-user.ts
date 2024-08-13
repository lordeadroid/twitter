import { DB_NAME } from "../utils/constant";
import db, { collection, addDoc } from "./db";

const saveUser = async (UID: string, username: string) => {
  try {
    await addDoc(collection(db, DB_NAME.users), {
      UID,
      username,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error adding document: ", error);
  }
};

export default saveUser;
