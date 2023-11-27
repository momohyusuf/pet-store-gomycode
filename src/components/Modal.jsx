import React, { useState } from "react";
import { Button, Modal, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

const CustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    let hello = "hello";
    if (hello) {
      messageApi.open({
        type: "success",
        content: "This is a success message",
      });
      return;
    }

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {contextHolder}
        <>
          <Input
            size="large"
            placeholder="large size"
            prefix={<UserOutlined />}
          />
          <br />
          <br />
          <Input placeholder="default size" prefix={<UserOutlined />} />
          <br />
          <br />
          <Input
            size="small"
            placeholder="small size"
            prefix={<UserOutlined />}
          />
        </>
      </Modal>
    </>
  );
};
export default CustomModal;
