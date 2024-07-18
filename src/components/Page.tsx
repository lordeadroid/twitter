import { Flex } from "@mantine/core";

type TPage = {
  height?: string;
  children: JSX.Element[];
};

const Page = (props: TPage) => {
  const { height, children } = props;

  return (
    <Flex
      h={height}
      direction={"column"}
      justify={"center"}
      gap={"10vh"}
      align={"center"}
      p={"10vh"}
    >
      {children}
    </Flex>
  );
};

export default Page;
