import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
const AvatarF = () => (
    <Space direction="vertical" size={16}>
        <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
        </Space>
    </Space>
);
export default AvatarF;