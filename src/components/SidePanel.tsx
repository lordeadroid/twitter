import { Flex, Group, Image, Text } from "@mantine/core";
import { SIZE } from "../utils/constant";
import homeIcon from "/home.png";
import exploreIcon from "/explore.png";
import messagesIcon from "/messages.png";

const SidePanel = () => {
  const menuOptions = [
    { name: "home", icon: homeIcon },
    { name: "explore", icon: exploreIcon },
    { name: "messages", icon: messagesIcon },
  ];

  return (
    <Flex direction={"column"} p={SIZE.small} mt={"4rem"}>
      {menuOptions.map((option, index) => {
        return (
          <Group key={index} p={SIZE.small} align="center ">
            <Image src={option.icon} alt="icon" h={"2rem"} />
            <Text>{option.name}</Text>
          </Group>
        );
      })}
    </Flex>
  );
};

export default SidePanel;
