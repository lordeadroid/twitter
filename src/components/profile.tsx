import { Avatar, Button, Card, Flex, Text } from "@mantine/core";
import useHandleLogout from "../hooks/use-handle-logout";
import getImgURL from "../utils/get-img-url";
import useLoginStore from "../context/use-login-store";

const Profile = () => {
  const handleLogout = useHandleLogout();
  const { avatar, background } = getImgURL();
  const username = useLoginStore((state) => state.username);

  return (
    <Card withBorder padding="xl" radius="md" bg="aliceblue">
      <Card.Section
        h={150}
        style={{
          backgroundImage: `url(${background})`,
        }}
      />
      <Card.Section>
        <Avatar src={avatar} size={150} radius="50%" mx="auto" mt={-100} />
        <Text ta="center" fz="xl" fw={700} mt="sm">
          {username}
        </Text>
      </Card.Section>
      <Flex justify="space-between" mt="4rem">
        <Button w="12rem" variant="outline" color="primary">
          Full Profile
        </Button>
        <Button onClick={handleLogout} w="12rem">
          Logout
        </Button>
      </Flex>
    </Card>
  );
};

export default Profile;
