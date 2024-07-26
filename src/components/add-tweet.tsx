import { Divider, Flex, Group, Text, Textarea } from "@mantine/core";
import { EMPTYSTRING, SIZE, TWEET_LIMIT } from "../utils/constant";
import { useState } from "react";
import CreateButton from "./CreateButton";
import updateTweets from "../services/update-tweets";
import useLoginStore from "../context/use-login-store";

const AddTweet = () => {
  const [message, setMessage] = useState(EMPTYSTRING);
  const [errorMsg, setErrorMsg] = useState(EMPTYSTRING);
  const email = useLoginStore((state) => state.email);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    if (message.length === 0) {
      setErrorMsg("Oops! nothing in here");

      setTimeout(() => {
        setErrorMsg(EMPTYSTRING);
      }, 2000);

      return;
    }

    updateTweets(email, message);
    setMessage(EMPTYSTRING);
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
      <Group justify={"space-between"} p={SIZE.extraSmall}>
        <Text c={"red"} size={SIZE.small}>
          {errorMsg}
        </Text>
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
        <CreateButton handleClick={handleSubmit} value="Tweet" />
      </Flex>
    </Flex>
  );
};

export default AddTweet;
