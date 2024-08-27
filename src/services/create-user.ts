import db, { doc, setDoc } from "./db";
import { TImages } from "../utils/types";
import { DB_NAME } from "../utils/constant";

const saveUser = async (UID: string, username: string, images: TImages) => {
  try {
    await setDoc(doc(db, DB_NAME.users, username), {
      UID,
      username,
      images,
      friends: [],
      requested: [],
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error adding document: ", error);
  }
};

export default saveUser;
