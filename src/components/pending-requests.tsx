import { useEffect, useState } from "react";

import useLoginStore from "../context/use-login-store";
import { Avatar, Button, Flex, Text } from "@mantine/core";
import getUserDetails, { TUser } from "../services/get-user-details";
import { approveRequest, cancelRequest } from "../services/requests";

const PendingRequests = () => {
  const uid = useLoginStore((state) => state.UID);
  const username = useLoginStore((state) => state.username);
  const [updatePage, setUpdatePage] = useState(Date.now());
  const [userData, setUserData] = useState<TUser | null>(null);

  useEffect(() => {
    getUserDetails(uid).then(([userData]) => {
      setUserData(userData);
    });
  }, [uid, updatePage]);

  return (
    <Flex
      direction="column"
      w="100%"
      bd="1px solid darkgray"
      bg="whitesmoke"
      p="xl"
      style={{ borderRadius: "1rem" }}
      mb="xl"
    >
      <Text fz="h2" fw={500}>
        Pending Requests
      </Text>
      <Flex w="100%" p="md">
        {userData?.requested?.map((element) => {
          return (
            <Flex justify="space-between" w="100%" pt="xs">
              <Flex align="center" gap="sm">
                <Avatar size={40} src={userData.images.avatar} radius="25%" />
                <Text fz="1.25rem" fw={600}>
                  {element}
                </Text>
              </Flex>
              <Flex gap="lg">
                <Button
                  color="lime"
                  onClick={() => {
                    approveRequest(username, element).then(() => {
                      setUpdatePage(Date.now());
                    });
                  }}
                >
                  Approve
                </Button>
                <Button
                  color="pink"
                  onClick={() => {
                    cancelRequest(username, element).then(() => {
                      setUpdatePage(Date.now());
                    });
                  }}
                >
                  Cancel
                </Button>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default PendingRequests;
