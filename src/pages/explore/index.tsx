import { useEffect, useState } from "react";
import addFriend from "../../services/add-friend";
import useLoginStore from "../../context/use-login-store";
import { Avatar, Table, Text, Flex, Button } from "@mantine/core";
import getUserDetails, { TUser } from "../../services/get-user-details";
import Requests from "../../components/requests";

const UserProfile = ({
  userData,
  username,
}: {
  userData: TUser;
  username: string;
}) => {
  const [status, setStatus] = useState(userData.requested.includes(username));

  const handleClick = (requester: string) => {
    addFriend(requester, username);
    setStatus(true);
  };

  return (
    <Table.Tr key={userData.UID}>
      <Table.Td>
        <Flex align="center" justify="space-between">
          <Flex align="center" gap="xl">
            <Avatar size={60} src={userData.images.avatar} radius="25%" />
            <Text fz="xl" fw={500}>
              {userData.username}
            </Text>
          </Flex>
          <Flex gap="md">
            <Button
              color={status ? "green" : "blue"}
              onClick={() => handleClick(userData.UID)}
            >
              {status ? "Requested" : "Add Friend"}
            </Button>
            <Button color="red">Block</Button>
          </Flex>
        </Flex>
      </Table.Td>
    </Table.Tr>
  );
};

const ExplorePage = () => {
  const uid = useLoginStore((state) => state.UID);
  const username = useLoginStore((state) => state.username);
  const [users, setUsers] = useState<TUser[] | null>(null);

  useEffect(() => {
    getUserDetails(null).then((users) => {
      setUsers(users.filter((user) => user.UID !== uid));
    });
  }, [uid]);

  return (
    <Flex w="100%" p="xl" direction="column">
      <Requests uid={uid} />
      <Table.ScrollContainer minWidth={800} w="100%">
        <Table verticalSpacing="lg">
          <Table.Tbody>
            {users?.map((element) => (
              <UserProfile
                userData={element}
                username={username}
                key={element.username}
              />
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Flex>
  );
};

export default ExplorePage;
