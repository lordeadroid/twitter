import { notifications } from "@mantine/notifications";

const createNotification = (title: string, message: string) => {
  notifications.show({
    title,
    message,
    autoClose: 2000,
  });
};

export default createNotification;
