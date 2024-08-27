import { useState } from "react";

import Page from "../../components/page";
import { EMPTYSTRING } from "../../utils/constant";
import PageHeader from "../../components/page-header";
import MessageBox, { TMessage } from "../../components/message-box";

const ChatPage = () => {
  const [message, setMessage] = useState(EMPTYSTRING);

  const handleClick = ({ value }: TMessage) => {
    setMessage(value);
  };

  return (
    <Page direction="column">
      <PageHeader title="Chat" />
      <MessageBox onClick={handleClick} />
      {message}
    </Page>
  );
};

export default ChatPage;
