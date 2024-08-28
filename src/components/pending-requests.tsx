import { useEffect, useState } from "react";
import { Button, Flex, Text } from "@mantine/core";

import useLoginStore from "../context/use-login-store";
import getUserDetails, { TUser } from "../services/get-user-details";
import { approveRequest, cancelRequest } from "../services/requests";
import createNotification from "../services/create-notification";

const PendingRequests = ({ updatePage }: { updatePage: () => void }) => {
  const uid = useLoginStore((state) => state.UID);
  const username = useLoginStore((state) => state.username);
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
      <Flex w="100%" p="sm">
        {userData?.requested.map((requester) => {
          return (
            <Flex justify="space-between" w="100%" pt="xs" key={requester}>
              <Flex align="center" gap="sm">
                <Text fz="1.25rem" fw={600}>
                  {requester}
                </Text>
              </Flex>
              <Flex gap="lg">
                <Button
                  color="lime"
                  onClick={() => {
                    approveRequest(username, requester).then(() => {
                      updatePage();
                      createNotification(
                        "Friend Request",
                        `${requester} is your friend now`
                      );
                    });
                  }}
                >
                  Approve
                </Button>
                <Button
                  color="pink"
                  onClick={() => {
                    cancelRequest(username, requester).then(() => {
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
