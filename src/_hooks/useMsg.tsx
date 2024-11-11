import { message } from 'antd';
import { useEffect, useState } from 'react';

const useMsg = () => {
  const [messageApi] = message.useMessage();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      messageApi.open({
        type: 'success',
        content: 'This is a prompt message with custom className and style',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      });
      setShowMessage(false); // Reset the state to avoid triggering the message multiple times
    }
  }, [showMessage, messageApi]); // Run the effect when showMessage changes

  const success = () => {
    setShowMessage(true); // Trigger the message when success is called
  };

  return { success };
};

export default useMsg;
