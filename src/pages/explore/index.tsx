import { useEffect, useState } from "react";
<<<<<<< HEAD
import useLoginStore from "../../context/use-login-store";
import { Avatar, Table, Text, Flex, Button } from "@mantine/core";
import getUserDetails, { TUser } from "../../services/get-user-details";
import Requests from "../../components/requests";
import { addFriend } from "../../services/requests";
import { EMPTYSTRING, PATH } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";

const UserProfile = ({
  userData,
  username,
}: {
  userData: TUser;
  username: string;
}) => {
  const navigate = useNavigate();
  const UID = useLoginStore((state) => state.UID);
  const [status, setStatus] = useState(userData.requested.includes(username));

  const handleClick = (requester: string) => {
    addFriend(requester, username);
    setStatus(true);
  };

  useEffect(() => {
    if (UID === EMPTYSTRING) {
      navigate(PATH.auth);
    }
  }, [UID, navigate]);

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
              onClick={() => handleClick(userData.username)}
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
    <Page direction="column">
      <Requests uid={uid} />
      <Table.ScrollContainer minWidth="100%">
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
    </Page>
=======
import getUserDetails, { TUser } from "../../services/get-user-details";
import { Avatar, Table, Text, Flex, Button } from "@mantine/core";

const ExplorePage = () => {
  const [users, setUsers] = useState<TUser[] | null>(null);

  useEffect(() => {
    getUserDetails(null).then((users: TUser[]) => {
      setUsers(users);
    });
  }, []);

  return (
    <Table.ScrollContainer minWidth={800} w="100%" p="xl">
      <Table verticalSpacing="lg">
        <Table.Tbody>
          {users?.map((element) => (
            <Table.Tr key={element.UID}>
              <Table.Td>
                <Flex align="center" justify="space-between">
                  <Flex align="center" gap="xl">
                    <Avatar
                      size={60}
                      src={element.images.avatar}
                      radius="25%"
                    />
                    <Text fz="xl" fw={500}>
                      {element.username}
                    </Text>
                  </Flex>
                  <Flex gap="md">
                    <Button>Add Friend</Button>
                    <Button color="red">Block</Button>
                  </Flex>
                </Flex>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
>>>>>>> 7e8b2d8 (feat: showing all users in explore section)
  );
};

export default ExplorePage;
