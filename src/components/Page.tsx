import { Flex, FlexProps } from "@mantine/core";

const Page = (props: FlexProps) => {
  const { h = "100vh", w = "100vw", children, ...restProps } = props;

  return (
    <Flex p="3rem 6rem" h={h} w={w} {...restProps}>
      {children}
    </Flex>
  );
};

export default Page;
