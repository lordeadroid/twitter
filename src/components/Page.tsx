import { Flex, FlexProps } from "@mantine/core";

const Page = (props: FlexProps) => {
<<<<<<< HEAD
  const { h = "100%", w = "100%", p = "xl", children, ...restProps } = props;

  return (
    <Flex p={p} h={h} w={w} {...restProps}>
=======
  const { h = "100vh", w = "100vw", children, ...restProps } = props;

  return (
    <Flex p="3rem 6rem" h={h} w={w} {...restProps}>
>>>>>>> a0c06e5 (refact: styling of page + router change)
      {children}
    </Flex>
  );
};

export default Page;
