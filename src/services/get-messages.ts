import { TMessage } from "../utils/types";
import { DB_NAME } from "../utils/constant";
import db, { collection, limit, onSnapshot, orderBy, query, where } from "./db";

const getMessages = (
  chatID: string,
  onUpdate: (messages: TMessage[]) => void,
  queryLimit = 10
) => {
  const messagesQuery = query(
    collection(db, DB_NAME.messages),
    orderBy("timestamp", "desc"),
    where("chatID", "==", chatID),
    limit(queryLimit)
  );

  const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
    const messages: TMessage[] = [];

    querySnapshot.forEach((doc) => {
      messages.push(doc.data() as TMessage);
    });

    onUpdate(messages);
  });

  return unsubscribe;
};

export default getMessages;
