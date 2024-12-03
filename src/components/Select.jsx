import React from 'react';
import { Select } from 'antd';
const SelectF = () => (
    <Select
        showSearch
        placeholder="Select your status"
        filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
            {
                value: '1',
                label: 'Hired',
            },
            {
                value: '2',
                label: 'Unhired',
            },
            {
                value: '3',
                label: 'Fired :)',
            },
        ]}
    />
);
export default SelectF;