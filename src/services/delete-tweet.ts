import db, {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "./db";
import { DB_NAME } from "../utils/constant";

const deleteTweet = async (message: string, username: string) => {
  const tweetsQuery = query(
    collection(db, DB_NAME.tweets),
    orderBy("timestamp", "desc"),
    where("message", "==", message),
    where("username", "==", username)
  );

  const queryData = await getDocs(tweetsQuery);
  const [docID] = queryData.docs.map((doc) => doc.id);

  await deleteDoc(doc(db, DB_NAME.tweets, docID));
};

export default deleteTweet;
