import { Flex, FlexProps } from "@mantine/core";

const Page = (props: FlexProps) => {
  const {
    h = "100vh",
    w = "100vw",
    p = "2rem 3rem",
    children,
    ...restProps
  } = props;

  return (
    <Flex h={h} w={w} p={p} {...restProps}>
      {children}
    </Flex>
  );
};

export default Page;
