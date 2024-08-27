import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Flex, Table, Text } from "@mantine/core";

import Page from "../../components/page";
import { PATH } from "../../utils/constant";
import PageHeader from "../../components/page-header";
import useLoginStore from "../../context/use-login-store";
import getUserDetails, { TUser } from "../../services/get-user-details";

const MessagesPage = () => {
  const navigate = useNavigate();
  const uid = useLoginStore((state) => state.UID);
  const username = useLoginStore((state) => state.username);
  const [users, setUsers] = useState<TUser[] | null>(null);

  const handleClick = () => {
    navigate(`${PATH.chat}/${username}`);
  };

  useEffect(() => {
    getUserDetails(null).then((users) => {
      setUsers(users.filter((user) => user.friends?.includes(username)));
    });
  }, [uid, username]);

  return (
    <Page direction="column">
      <PageHeader title="Messages" />
      <Table.ScrollContainer minWidth="100%" pt="2rem">
        <Table verticalSpacing="xl">
          <Table.Tbody>
            {users?.map((user) => (
              <Table.Tr key={user.UID}>
                <Table.Td p="xl">
                  <Flex align="center" justify="space-between">
                    <Flex align="center" gap="xl">
                      <Avatar size={60} src={user.images.avatar} radius="25%" />
                      <Text fz="xl" fw={500}>
                        {user.username}
                      </Text>
                    </Flex>
                    <Button color="green" size="md" onClick={handleClick}>
                      Message
                    </Button>
                  </Flex>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Page>
  );
};

export default MessagesPage;
