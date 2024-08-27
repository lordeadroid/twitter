import { useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Paper, ScrollArea, Stack, Text } from "@mantine/core";

import Page from "../../components/page";
import PageHeader from "../../components/page-header";
import MessageBox from "../../components/message-box";
import useLoginStore from "../../context/use-login-store";

const ChatPage = () => {
  const { user } = useParams();
  const username = useLoginStore((state) => state.username);
  const [messages, setMessage] = useState([{ msg: "hello", sender: "test" }]);

  const handleClick = (value: string) => {
    setMessage((prev) => [...prev, { msg: value, sender: username }]);
    console.log(messages);
  };

  return (
    <Page direction="column">
      <PageHeader title={user as string} />
      <Flex justify="space-between" direction="column" h="100%" p="xl">
        <Flex w="100%" h="85%">
          <ScrollArea w="100%">
            <Stack>
              {messages.map(({ msg, sender }, index) => (
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
                  <Text>{msg}</Text>
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
