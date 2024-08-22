import db, { collection, getDocs, limit, orderBy, query, where } from "./db";
import { TTweet } from "../utils/types";
import { DB_NAME } from "../utils/constant";

const getTweets = async (uid: string, queryLimit = 10): Promise<TTweet[]> => {
  const tweetsQuery = query(
    collection(db, DB_NAME.tweets),
    orderBy("timestamp", "desc"),
    where("UID", "==", uid),
    limit(queryLimit),
  );

  const queryData = await getDocs(tweetsQuery);
  const tweets = queryData.docs.map((doc) => doc.data() as TTweet);

  return tweets;
};

export default getTweets;
