import { Button, TextInput } from "@mantine/core";
import { useForm, UseFormReturnType } from "@mantine/form";

import { EMPTYSTRING } from "../utils/constant";

const MessageBox = ({ onClick }: { onClick: (value: string) => void }) => {
  const messageBox: UseFormReturnType<{ value: string }> = useForm({
    mode: "controlled",
    initialValues: { value: EMPTYSTRING },
  });

  const handleClick = ({ value }: { value: string }) => {
    onClick(value);
    messageBox.reset();
  };

  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        gap: "0.75rem",
        justifyContent: "center",
      }}
      onSubmit={messageBox.onSubmit(handleClick)}
    >
      <TextInput
        placeholder="Type your message..."
        radius="1rem"
        w="90%"
        {...messageBox.getInputProps("value")}
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default MessageBox;
