import {
  Avatar,
  Button,
  ButtonProps,
  Flex,
  Image,
  Table,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Page from "../../components/page";
import backButton from "/back-button.png";
import { PATH } from "../../utils/constant";
import useLoginStore from "../../context/use-login-store";
import getUserDetails, { TUser } from "../../services/get-user-details";

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
      <Flex w="100%" pos="relative" align="center" justify="center">
        <BackButton pos="absolute" left={0} />
        <Text fz="h1" fw={700}>
          Messages
        </Text>
      </Flex>
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
