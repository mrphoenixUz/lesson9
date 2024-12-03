import React from 'react';
import { Button, Popover } from 'antd';
const content = (
  <div>
    <p>First Me</p>
    <p>Second Me</p>
  </div>
);
const PopoverF = () => (
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>
);
export default PopoverF;