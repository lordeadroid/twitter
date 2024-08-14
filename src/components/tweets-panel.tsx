import twitterLogo from "/favicon.png";
import getTweets from "../services/get-tweets";
import useLoginStore from "../context/use-login-store";
import useTweetStore from "../context/use-tweet-store";
import { TTweet } from "../utils/types";
import { useEffect, useState } from "react";
import { Flex, Image, Text } from "@mantine/core";

const Tweet = ({ tweet }: { tweet: TTweet }) => {
  const date = new Date(tweet.timestamp).toDateString();

  return (
    <Flex
      bd="1px solid darkgray"
      w="100%"
      direction="column"
      style={{ borderRadius: "1rem" }}
    >
      <Flex justify="space-between" align="center" p="1rem 1rem 0.5rem 1rem">
        <Flex gap="sm" align="center">
          <Image radius="50%" h="xl" alt="profile image" src={twitterLogo} />
          <Text fw={700} fz="lg">
            {tweet.username}
          </Text>
        </Flex>
        <Text size="sm">{date}</Text>
      </Flex>
      <Text pl="3.8rem" pb="1rem">
        {tweet.message}
      </Text>
    </Flex>
  );
};

const TweetsPanel = ({ width }: { width: string }) => {
  const rerenderTweets = useTweetStore((state) => state.rerenderTweets);
  const uid = useLoginStore((state) => state.UID);
  const [tweets, setTweets] = useState<TTweet[] | null>(null);

  useEffect(() => {
    (async () => {
      const tweetsData = await getTweets(uid);
      setTweets(tweetsData);
    })();
  }, [rerenderTweets, uid]);

  return (
    <Flex direction={"column"} p="xl" w={width} gap="md">
      {tweets?.map((tweet, index) => {
        return <Tweet key={index} tweet={tweet} />;
      })}
    </Flex>
  );
};

export default TweetsPanel;
