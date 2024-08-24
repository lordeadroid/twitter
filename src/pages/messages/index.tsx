import Page from "../../components/Page";
import { Button, ButtonProps, Flex, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import backButton from "/back-button.png";
import { useEffect, useState } from "react";
import getUserDetails, { TUser } from "../../services/get-user-details";
import useLoginStore from "../../context/use-login-store";

const BackButton = (props: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Button variant="subtle" onClick={handleClick} size="md" {...props}>
      <Image src={backButton} w="2.25rem" />
    </Button>
  );
};

const MessagesPage = () => {
  const uid = useLoginStore((state) => state.UID);
  const username = useLoginStore((state) => state.username);
  const [users, setUsers] = useState<TUser[] | null>(null);

  useEffect(() => {
    getUserDetails(null).then((users) => {
<<<<<<< HEAD
<<<<<<< HEAD
      setUsers(users.filter((user) => user.friends?.includes(username)));
=======
      setUsers(users.filter((user) => user.friends.includes(username)));
>>>>>>> 899d232 (feat: message page)
=======
      setUsers(users.filter((user) => user.friends?.includes(username)));
>>>>>>> a7184e9 (chore: updated packages)
    });
  }, [uid, username]);

  return (
    <Page direction="column">
      <Flex w="100%" pos="relative" align="center" justify="center">
        <BackButton pos="absolute" left={0} />
        <Text fz="h1" fw={700}>
          Messages
        </Text>
      </Flex>
      <Flex>
        {users?.map((user) => {
          return <Text>{user.username}</Text>;
        })}
      </Flex>
    </Page>
  );
};

export default MessagesPage;
