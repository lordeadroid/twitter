import { Text } from "@mantine/core";

type THeading = {
  text: string;
  color?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: number;
};

const Heading = (props: THeading) => {
  const { text, color, width, fontSize, fontWeight } = props;

  return (
    <Text
      size={fontSize}
      fw={fontWeight}
      c={color}
      w={width}
      style={{ textAlign: "center" }}
    >
      {text}
    </Text>
  );
};

export default Heading;
