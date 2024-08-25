import { Flex, FlexProps } from "@mantine/core";

const Page = (props: FlexProps) => {
  const { h = "100vh", w = "100vw", p = "xl", children, ...restProps } = props;

  return (
    <Flex h={h} w={w} p={p} {...restProps}>
      {children}
    </Flex>
  );
};

export default Page;
