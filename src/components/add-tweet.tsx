import { Divider, Flex, Group, Text, Textarea } from "@mantine/core";
import { EMPTYSTRING, SIZE, TWEET_LIMIT } from "../utils/constant";
import { useState } from "react";
import Button from "./button";
import updateTweets from "../services/update-tweets";
import useLoginStore from "../context/use-login-store";
import useTweetStore from "../context/use-tweet-store";

const AddTweet = () => {
  const [message, setMessage] = useState(EMPTYSTRING);
  const [buttonState, setButtonState] = useState(true);
  const UID = useLoginStore((state) => state.UID);
  const username = useLoginStore((state) => state.username);
  const refreshTweets = useTweetStore((state) => state.refreshTweets);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = event.target.value;

    setMessage(newMessage);
    setButtonState(newMessage.length === 0);
  };

  const handleSubmit = () => {
    updateTweets(UID, username, message.trim());
    setMessage(EMPTYSTRING);
    refreshTweets();
  };

  return (
    <Flex
      w={"100%"}
      direction={"column"}
      bd={"1px solid darkgray"}
      style={{ borderRadius: "0.75rem" }}
    >
      <Textarea
        value={message}
        onChange={handleChange}
        w={"inherit"}
        variant="unstyled"
        p={"0 1rem"}
        size="1.25rem"
        rows={4}
      />
      <Group justify={"flex-end"} p={SIZE.extraSmall}>
        <Text c={"gray"} size={SIZE.small}>
          {TWEET_LIMIT - message.length} characters left
        </Text>
      </Group>
      <Divider />
      <Flex
        justify={"space-between"}
        align={"center"}
        bg={"primary.2"}
        w={"inherit"}
        p={SIZE.extraSmall}
        style={{ borderRadius: "0 0 0.75rem 0.75rem" }}
      >
        <Text>Tell the world what's in your mind!</Text>
        <Button
          value="Tweet"
          handleClick={handleSubmit}
          disabled={buttonState}
        />
      </Flex>
    </Flex>
  );
};

export default AddTweet;
