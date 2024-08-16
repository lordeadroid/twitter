import { Avatar, Button, Card, Flex, Text } from "@mantine/core";
import useHandleLogout from "../hooks/use-handle-logout";
import useLoginStore from "../context/use-login-store";

const Profile = () => {
  const handleLogout = useHandleLogout();
  const username = useLoginStore((state) => state.username);
  const images = useLoginStore((state) => state.images);

  return (
    <Card withBorder padding="xl" radius="md" bg="aliceblue">
      <Card.Section
        h={150}
        style={{
          backgroundImage: `url(${images.background})`,
        }}
      />
      <Card.Section>
        <Avatar
          src={images.avatar}
          size={150}
          radius="50%"
          mx="auto"
          mt={-75}
        />
        <Text ta="center" fz="xl" fw={700} mt="sm">
          {username}
        </Text>
      </Card.Section>
      <Flex justify="space-between" mt="3rem">
        <Button w="47%" variant="outline" color="primary">
          Full Profile
        </Button>
        <Button onClick={handleLogout} w="47%">
          Logout
        </Button>
      </Flex>
    </Card>
  );
};

export default Profile;
