import { Button } from "@mantine/core";

type TButton = {
  value: string;
  type?: "submit" | "reset";
  color?: string;
  size?: string;
  width?: string;
  handleClick?: () => void;
};

const CreateButton = (props: TButton) => {
  const { value, type, color, width, size, handleClick } = props;

  return (
    <Button
      type={type}
      size={size}
      color={color}
      w={width}
      onClick={handleClick}
    >
      {value}
    </Button>
  );
};

export default CreateButton;
