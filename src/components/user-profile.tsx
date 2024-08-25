import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Table, Text, Flex, Button } from "@mantine/core";

import { addFriend } from "../services/requests";
import { TUser } from "../services/get-user-details";
import { EMPTYSTRING, PATH } from "../utils/constant";
import useLoginStore from "../context/use-login-store";

const UserProfile = ({
  userData,
  username,
}: {
  userData: TUser;
  username: string;
}) => {
  const navigate = useNavigate();
  const UID = useLoginStore((state) => state.UID);
  const [status, setStatus] = useState(userData.requested?.includes(username));

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

export default UserProfile;
