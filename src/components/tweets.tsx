import { Flex, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { SIZE } from "../utils/constant";
import Heading from "./Heading";

type TTweet = {
  user: string;
  message: string;
  date: Date;
  likes: number;
};

const CreateTweet = ({ tweet }: { tweet: TTweet }) => {
  return (
    <Flex
      bd={"1px solid darkgray"}
      w={"100%"}
      p={SIZE.extraSmall}
      direction={"column"}
    >
      <Heading text={tweet.user} fontWeight={700} />
      <Text p={"0 2rem"}>{tweet.message}</Text>
    </Flex>
  );
};

const Tweets = () => {
  const [tweets, setTweets] = useState<TTweet[] | null>(null);

  useEffect(() => {
    setTweets([
      { user: "rishabh", message: "hello", date: new Date(), likes: 10 },
      { user: "tester", message: "bye", date: new Date(), likes: 1000 },
    ]);
  }, []);

  return (
    <Flex direction={"column"} p={SIZE.extraLarge} w={"100%"} gap={SIZE.medium}>
      {tweets?.map((tweet, index) => {
        return <CreateTweet key={index} tweet={tweet} />;
      })}
    </Flex>
  );
};

export default Tweets;
