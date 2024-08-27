import { useNavigate } from "react-router-dom";
import { Button, Flex, Image, Text } from "@mantine/core";

import backButton from "/back-button.png";

const PageHeader = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  return (
    <Flex w="100%" pos="relative" align="center" justify="center">
      <Button
        variant="transparent"
        size="md"
        onClick={() => navigate(-1)}
        pos="absolute"
        left={0}
      >
        <Image src={backButton} w="2.25rem" />
      </Button>
      <Text fz="h1" fw={700}>
        {title}
      </Text>
    </Flex>
  );
};

export default PageHeader;
