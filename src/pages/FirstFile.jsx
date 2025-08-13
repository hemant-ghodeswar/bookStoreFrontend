import React from 'react';
import { Button, Flex } from 'antd';
const AppData = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <Flex gap="small" wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Flex>
  </div>
);

export default AppData;