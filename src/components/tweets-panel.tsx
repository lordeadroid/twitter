import { useEffect, useState } from "react";
import { Button, Flex, Image, ScrollArea, Text } from "@mantine/core";

import deleteIcon from "/delete-icon.png";
import { TTweet } from "../utils/types";
import getTweets from "../services/get-tweets";
import useLoginStore from "../context/use-login-store";
import useTweetStore from "../context/use-tweet-store";
import deleteTweet from "../services/delete-tweet";

const Tweet = ({
  tweet,
  updatePage,
}: {
  tweet: TTweet;
  updatePage: () => void;
}) => {
  const date = new Date(tweet.timestamp).toDateString();
  const { avatar } = useLoginStore((state) => state.images);

  return (
    <Flex
      bd="1px solid darkgray"
      w="95%"
      m="lg"
      direction="column"
      style={{ borderRadius: "1rem" }}
    >
      <Flex justify="space-between" align="center" p="1rem 1rem 0.5rem 1rem">
        <Flex gap="sm" align="center">
          <Image radius="50%" h="xl" alt="profile image" src={avatar} />
          <Text fw={700} fz="xl">
            {tweet.username}
          </Text>
        </Flex>
        <Flex align="center">
          <Text size="sm">{date}</Text>
          <Button
            variant="transparent"
            onClick={async () => {
              await deleteTweet(tweet.message, tweet.username);
              updatePage();
            }}
          >
            <Image h="1rem" src={deleteIcon} />
          </Button>
        </Flex>
      </Flex>
      <Text pl="3.8rem" pb="1rem" fz="lg">
        {tweet.message}
      </Text>
    </Flex>
  );
};

const TweetsPanel = () => {
  const rerenderTweets = useTweetStore((state) => state.rerenderTweets);
  const uid = useLoginStore((state) => state.UID);
  const [tweets, setTweets] = useState<TTweet[] | null>(null);
  const [refreshPage, setRefreshPage] = useState(Date.now());

  useEffect(() => {
    (async () => {
      const tweetsData = await getTweets(uid);
      setTweets(tweetsData);
    })();
  }, [rerenderTweets, uid, refreshPage]);

  return (
    <Flex direction={"column"} p="xl" w="100%" gap="md" h="80%">
      <ScrollArea h="80%">
        {tweets?.map((tweet, index) => {
          return (
            <Tweet
              key={index}
              tweet={tweet}
              updatePage={() => setRefreshPage(Date.now())}
            />
          );
        })}
      </ScrollArea>
    </Flex>
  );
};

export default TweetsPanel;
