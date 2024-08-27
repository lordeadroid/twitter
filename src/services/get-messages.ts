import { TMessage } from "../utils/types";
import { DB_NAME } from "../utils/constant";
import db, { collection, getDocs, limit, orderBy, query, where } from "./db";

const getMessages = async (chatID: string, queryLimit = 10) => {
  const messagesQuery = query(
    collection(db, DB_NAME.messages),
    orderBy("timestamp", "desc"),
    where("chatID", "==", chatID),
    limit(queryLimit)
  );

  const queryData = await getDocs(messagesQuery);
  const messages = queryData.docs.map((doc) => doc.data() as TMessage);

  return messages;
};

export default getMessages;
