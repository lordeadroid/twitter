import { Flex } from "@mantine/core";

type TPage = {
  height?: string;
  width?: string;
  justify?: string;
  align?: string;
  children: JSX.Element[];
};

const Page = (props: TPage) => {
  const { height, width, justify, align, children } = props;

  return (
    <Flex
      h={height}
      w={width}
      p={"3rem 8rem"}
      direction={"column"}
      gap={"8vh"}
      justify={justify}
      align={align}
    >
      {children}
    </Flex>
  );
};

export default Page;
