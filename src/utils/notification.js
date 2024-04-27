import { notification } from "antd";

export const openNotificationWithIcon = (type, title, desc) => {
    notification[type]({
      message: title,
      description: desc
    });
  };