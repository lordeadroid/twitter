import { DB } from "../utils/constant";
import { TTweet } from "../utils/types";
import db, { collection, getDocs } from "./db";

const getTweets = async (): Promise<TTweet[]> => {
  const queryData = await getDocs(collection(db, DB.tweets));
  const tweetsData = queryData.docs.map((doc) => doc.data() as TTweet);

  return tweetsData;
};

export default getTweets;
