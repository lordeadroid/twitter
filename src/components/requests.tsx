import { useEffect, useState } from "react";
import getUserDetails, { TUser } from "../services/get-user-details";
import { Avatar, Button, Flex, Text } from "@mantine/core";

const Requests = ({ uid }: { uid: string }) => {
  const [userData, setUserData] = useState<TUser | null>(null);

  useEffect(() => {
    getUserDetails(uid).then(([userData]) => {
      setUserData(userData);
    });
  }, [uid]);

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
      <Flex w="100%" p="lg">
        {userData?.requested.map((element) => {
          return (
            <Flex justify="space-between" w="100%">
              <Flex align="center" gap="md">
                <Avatar size={40} src={userData.images.avatar} radius="25%" />
                <Text fz="1rem">{element}</Text>
              </Flex>
              <Flex gap="xl">
                <Button color="lime">Approve</Button>
                <Button color="pink">Cancel</Button>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Requests;
