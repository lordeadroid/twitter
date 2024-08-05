import { Flex } from "@mantine/core";
import { SIZE } from "../utils/constant";
import AddTweet from "./add-tweet";
import Profile from "./profile";

const ProfilePanel = ({ width }: { width: string }) => {
  return (
    <Flex
      w={width}
      direction={"column"}
      p={SIZE.extraLarge}
      justify="space-evenly"
    >
      <Profile />
      <AddTweet />
    </Flex>
  );
};

export default ProfilePanel;
