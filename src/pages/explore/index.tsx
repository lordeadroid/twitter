import { useEffect, useState } from "react";

import { Table } from "@mantine/core";
import Page from "../../components/page";
import PendingRequests from "../../components/pending-requests";
import UserProfile from "../../components/user-profile";
import useLoginStore from "../../context/use-login-store";
import getUserDetails, { TUser } from "../../services/get-user-details";

const ExplorePage = () => {
  const uid = useLoginStore((state) => state.UID);
  const [users, setUsers] = useState<TUser[] | null>(null);
  const [updatePage, setUpdatePage] = useState(Date.now());
  const username = useLoginStore((state) => state.username);

  useEffect(() => {
    getUserDetails(null).then((users) => {
      setUsers(
        users
          .filter((user) => user.UID !== uid)
          .filter(
            ({ friends }) =>
              !friends.some((friend) => friend.username === username)
          )
      );
    });
  }, [uid, username, updatePage]);

  return (
    <Page direction="column">
      <PendingRequests updatePage={() => setUpdatePage(Date.now())} />
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
