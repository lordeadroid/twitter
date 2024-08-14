import { useEffect, useState } from "react";
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
  );
};

export default ExplorePage;
