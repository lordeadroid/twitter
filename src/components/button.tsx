import { ButtonProps, Button as MantineButton } from "@mantine/core";

type TButton = ButtonProps & {
  value: string;
  type?: "submit" | "reset";
  color?: string;
  size?: string;
  width?: string;
  handleClick?: () => void;
};

const Button = (props: TButton) => {
  const { value, type, color, width, size, handleClick, ...restProps } = props;

  return (
    <MantineButton
      type={type}
      size={size}
      color={color}
      w={width}
      onClick={handleClick}
      {...restProps}
    >
      {value}
    </MantineButton>
  );
};

export default Button;
