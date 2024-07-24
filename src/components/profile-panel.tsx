import { Flex } from "@mantine/core";
import { SIZE } from "../utils/constant";
import CreateButton from "./CreateButton";

type TProfilePanel = {
  width: string;
  handleLogout: () => void;
};

const ProfilePanel = (props: TProfilePanel) => {
  const { width, handleLogout } = props;

  return (
    <Flex w={width} justify={"right"}>
      <CreateButton
        size={SIZE.medium}
        handleClick={handleLogout}
        value="Logout"
      />
    </Flex>
  );
};

export default ProfilePanel;
