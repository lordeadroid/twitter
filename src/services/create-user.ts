import db, { collection, addDoc } from "./db";
import { TImages } from "../utils/types";
import { DB_NAME } from "../utils/constant";

const saveUser = async (UID: string, username: string, images: TImages) => {
  try {
    await addDoc(collection(db, DB_NAME.users), {
      UID,
      username,
      images,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error adding document: ", error);
  }
};

export default saveUser;
