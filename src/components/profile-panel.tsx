import { Flex } from "@mantine/core";
import { SIZE } from "../utils/constant";
import Button from "./button";
import AddTweet from "./add-tweet";

type TProfilePanel = {
  width: string;
  handleLogout: () => void;
};

const ProfilePanel = (props: TProfilePanel) => {
  const { width, handleLogout } = props;

  return (
    <Flex w={width} direction={"column"} p={SIZE.extraLarge}>
      <Flex h={"40%"} justify={"flex-end"}>
        <Button size={SIZE.medium} handleClick={handleLogout} value="Logout" />
      </Flex>
      <AddTweet />
    </Flex>
  );
};

export default ProfilePanel;
