import { Flex, Group, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { SIZE } from "../utils/constant";
import Heading from "./Heading";
import getTweets from "../services/get-tweets";
import { TTweet } from "../utils/types";
import useTweetStore from "../context/use-tweet-store";

const Tweet = ({ tweet }: { tweet: TTweet }) => {
  const date = new Date(tweet.timestamp).toDateString();

  return (
    <Flex
      bd={"1px solid darkgray"}
      w={"100%"}
      p={SIZE.extraSmall}
      direction={"column"}
      style={{ borderRadius: "1rem" }}
    >
      <Group justify="space-between">
        <Heading
          text={tweet.username}
          fontWeight={700}
          fontSize={SIZE.extraLarge}
        />
        <Text size={SIZE.extraSmall}>{date}</Text>
      </Group>
      <Text p={"0 2rem"}>{tweet.message}</Text>
    </Flex>
  );
};

const TweetsPanel = ({ width }: { width: string }) => {
  const rerenderTweets = useTweetStore((state) => state.rerenderTweets);
  const [tweets, setTweets] = useState<TTweet[] | null>(null);

  useEffect(() => {
    (async () => {
      const tweetsData = await getTweets();
      setTweets(tweetsData);
    })();
  }, [rerenderTweets]);

  return (
    <Flex direction={"column"} p={SIZE.extraLarge} w={width} gap={SIZE.medium}>
      {tweets?.map((tweet, index) => {
        return <Tweet key={index} tweet={tweet} />;
      })}
    </Flex>
  );
};

export default TweetsPanel;
