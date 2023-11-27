import React from "react";
import { Button, message, Space } from "antd";
const Message = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };

  return (
    <>
      {contextHolder}

      <Button onClick={success}>Success</Button>
    </>
  );
};
export default Message;
