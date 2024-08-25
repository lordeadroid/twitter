import { useEffect, useState } from "react";

import { Table } from "@mantine/core";
import Page from "../../components/Page";
import PendingRequests from "../../components/pending-requests";
import UserProfile from "../../components/user-profile";
import useLoginStore from "../../context/use-login-store";
import getUserDetails, { TUser } from "../../services/get-user-details";

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
      <PendingRequests />
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
  );
};

export default ExplorePage;
