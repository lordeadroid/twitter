import { Flex, FlexProps } from "@mantine/core";

const Page = (props: FlexProps) => {
  const { h = "100%", w = "100%", p = "xl", children, ...restProps } = props;

  return (
    <Flex h={h} w={w} p={p} {...restProps}>
      {children}
    </Flex>
  );
};

export default Page;
