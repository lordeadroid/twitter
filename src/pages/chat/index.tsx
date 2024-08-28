import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Paper, ScrollArea, Stack, Text } from "@mantine/core";

import Page from "../../components/page";
import { TMessage } from "../../utils/types";
import PageHeader from "../../components/page-header";
import getMessages from "../../services/get-messages";
import MessageBox from "../../components/message-box";
import useLoginStore from "../../context/use-login-store";
import { createMessage } from "../../services/create-chat";

const ChatPage = () => {
  const { user, chatID } = useParams();
  const username = useLoginStore((state) => state.username);
  const [messages, setMessages] = useState<TMessage[]>([]);

  useEffect(() => {
    const handleNewMessages = (newMessages: TMessage[]) => {
      setMessages(newMessages);
    };

    const stopUpdating = getMessages(chatID as string, handleNewMessages);

    return () => {
      stopUpdating();
    };
  }, [chatID]);

  const handleClick = (value: string) => {
    createMessage(chatID as string, username, value);
  };

  return (
    <Page direction="column">
      <PageHeader title={user as string} />
      <Flex justify="space-between" direction="column" h="100%" p="xl">
        <Flex w="100%" h="85%" direction="column-reverse">
          <ScrollArea w="100%">
            <Stack>
              {messages.reverse().map(({ text, sender }, index) => (
                <Paper
                  key={index}
                  p="sm"
                  style={{
                    display: "flex",
                    backgroundColor:
                      sender === username ? "#cce5ff" : "#e9ecef",
                    alignSelf: sender === username ? "flex-end" : "flex-start",
                  }}
                >
                  <Text>{text}</Text>
                </Paper>
              ))}
            </Stack>
          </ScrollArea>
        </Flex>
        <MessageBox onClick={handleClick} />
      </Flex>
    </Page>
  );
};

export default ChatPage;
