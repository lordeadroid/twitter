import { Flex, Group, Image, Text } from "@mantine/core";
import { SIZE } from "../utils/constant";
import homeIcon from "/home.png";
import exploreIcon from "/explore.png";
import messagesIcon from "/messages.png";
import twitterLogo from "/favicon.png";

const NavPanel = ({ width }: { width: string }) => {
  const menuOptions = [
    { name: "home", icon: homeIcon },
    { name: "explore", icon: exploreIcon },
    { name: "messages", icon: messagesIcon },
  ];

  return (
    <Flex direction={"column"} p={SIZE.small} w={width}>
      <Flex>
        <Group align="center" gap={SIZE.extraLarge} p={SIZE.extraLarge}>
          <Image src={twitterLogo} alt="Twitter Logo" h={"2.5rem"} />
          <Text fw={800} fz="2.5rem">
            twitter
          </Text>
        </Group>
      </Flex>
      <Flex p={SIZE.medium} direction={"column"}>
        {menuOptions.map((option, index) => {
          return (
            <Group key={index} p={SIZE.small} align="center ">
              <Image src={option.icon} alt="icon" h={"2rem"} />
              <Text>{option.name}</Text>
            </Group>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default NavPanel;
