import homeIcon from "/home.png";
import exploreIcon from "/explore.png";
import twitterLogo from "/favicon.png";
import messagesIcon from "/messages.png";
import { useNavigate } from "react-router-dom";
import { Flex, Group, Image, Text } from "@mantine/core";
import styles from "./components.module.css";

const NavPanel = ({ width }: { width: string }) => {
  const navigate = useNavigate();
  const menuOptions = [
    { name: "home", icon: homeIcon, route: "/" },
    { name: "explore", icon: exploreIcon, route: "/explore" },
    { name: "messages", icon: messagesIcon, route: "/messages" },
  ];

  return (
    <Flex direction="column" p="sm" w={width}>
      <Flex>
        <Group align="center" gap="xl" p="xl">
          <Image src={twitterLogo} alt="Twitter Logo" h="2.5rem" />
          <Text fw={800} fz="2.5rem">
            twitter
          </Text>
        </Group>
      </Flex>
      <Flex p="md" direction="column">
        {menuOptions.map((option, index) => {
          return (
            <Group
              key={index}
              p="sm"
              align="center"
              onClick={() => navigate(option.route)}
              className={styles.onhover}
            >
              <Image src={option.icon} alt="icon" h="2rem" />
              <Text>{option.name}</Text>
            </Group>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default NavPanel;
