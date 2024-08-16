import { Flex, FlexProps } from "@mantine/core";

const Page = (props: FlexProps) => {
  const { h = "100%", w = "100%", p = "xl", children, ...restProps } = props;

  return (
    <Flex p={p} h={h} w={w} {...restProps}>
      {children}
    </Flex>
  );
};

export default Page;
