import React from 'react';
import { Button, message } from 'antd';
const MessageF = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message for success, and it will disMessageFear in 10 seconds',
      duration: 10,
    });
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized display duration</Button>
    </>
  );
};
export default MessageF;