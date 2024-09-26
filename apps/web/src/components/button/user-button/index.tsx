import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Flex, Space } from 'antd';
import User from '../../../assets/iconos/User.png';

interface DropDownButtonProps{
  handleLoguedOut: () => void;
}

const DropDownButton: React.FC<DropDownButtonProps> = ({ handleLoguedOut }) => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a onClick={handleLoguedOut}>
          Close Section
        </a>
      ),
    },
  ];

  return(
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items }} placement="bottomRight">
          <Button
            style={{
              backgroundImage: `url(${User})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'transparent',
              width: '30px',
              height: '30px',
              border: 'none',
              alignItems: 'center',
              padding: '8px 0px',
            }}
          ></Button>
        </Dropdown>
      </Space>
    </Space>
  );
  

};

export default DropDownButton;