import { Avatar, Text, Card } from "@mantine/core";
import useHandleLogout from "../hooks/use-handle-logout";
import Button from "./button";
import getImgURL from "../utils/get-img-url";

const Profile = () => {
  const { avatar, background } = getImgURL();
  const handleLogout = useHandleLogout();

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
        <Text ta="center" fz="lg" fw={500} mt="sm">
          Bill Headbanger
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          Fullstack engineer
        </Text>
      </Card.Section>
      <Button
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        value="Logout"
        handleClick={handleLogout}
      />
    </Card>
  );
};

export default Profile;
