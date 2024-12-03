import React from 'react';
import { Alert } from 'antd';
const AlertF = () => (
  <>
    <Alert message="Success Tips" type="success" showIcon />
    <br />
    <Alert message="Informational Notes" type="info" showIcon />
    <br />
    <Alert message="Warning" type="warning" showIcon closable />
    <br />
    <Alert message="Error" type="error" showIcon />
    <br />
  </>
);
export default AlertF;