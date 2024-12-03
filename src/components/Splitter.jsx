import React from 'react';
import { Splitter } from 'antd';
import FirstProps from './FirstProps';
import ForPropsDiv from './ForPropsDiv';
import { Skeleton } from 'antd';


const stylee = {
    height: "100%",
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
}

const Splitterr = () => (
    <Splitter
    onResizeStart={() => {
        console.log("working");
    }}
    style={stylee}
    >
        <Splitter.Panel defaultSize="40%" min="20%" max="70%">
            <FirstProps fn1={<ForPropsDiv children={<Skeleton active={true} />} />} />
        </Splitter.Panel>   
        <Splitter.Panel>
            <FirstProps fn1={<ForPropsDiv children={<Skeleton active={true} />} />} />
        </Splitter.Panel>
    </Splitter>
);
export default Splitterr;