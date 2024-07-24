import { useState } from "react";
import db, { collection, getDocs } from "../services/db";
import { DB_NAME } from "../utils/constant";
import { Flex } from "@mantine/core";

const AddTweet = () => {
  const [data, setData] = useState({});

  return <Flex>AddTweet Section</Flex>;
};

export default AddTweet;
