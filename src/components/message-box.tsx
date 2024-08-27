import { Button, TextInput } from "@mantine/core";
import { useForm, UseFormReturnType } from "@mantine/form";

import { EMPTYSTRING } from "../utils/constant";

export type TMessage = {
  value: string;
};

type TMessageBox = {
  onClick: (value: TMessage) => void;
};

const MessageBox = ({ onClick }: TMessageBox) => {
  const messageBox: UseFormReturnType<TMessage> = useForm({
    mode: "uncontrolled",
    initialValues: { value: EMPTYSTRING },
  });

  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        gap: "0.75rem",
        justifyContent: "center",
      }}
      onSubmit={messageBox.onSubmit(onClick)}
    >
      <TextInput
        placeholder="Type your message..."
        radius="1rem"
        w="80%"
        {...messageBox.getInputProps("message")}
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default MessageBox;
