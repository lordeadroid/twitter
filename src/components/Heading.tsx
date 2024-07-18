import { Text } from "@mantine/core";

type THeading = {
  content: string;
  fontSize?: string;
  fontWeight?: number;
};

const Heading = (props: THeading) => {
  const { content, fontSize, fontWeight } = props;

  return (
    <Text size={fontSize} fw={fontWeight}>
      {content}
    </Text>
  );
};

export default Heading;
