import { DB } from "../utils/constant";
import { TTweet } from "../utils/types";
import db, { collection, getDocs, limit, orderBy, query } from "./db";

const getTweets = async (queryLimit = 10): Promise<TTweet[]> => {
  const tweetsQuery = query(
    collection(db, DB.tweets),
    orderBy("timestamp", "desc"),
    limit(queryLimit),
  );

  const queryData = await getDocs(tweetsQuery);
  const tweetsData = queryData.docs.map((doc) => doc.data() as TTweet);

  return tweetsData;
};

export default getTweets;
