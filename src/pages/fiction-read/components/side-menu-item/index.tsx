import { Button } from 'antd';
import React, { FC } from 'react';
export interface SideMenuItemProps {
  text: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
const SideMenuItem: FC<SideMenuItemProps> = ({ icon, text, onClick }) => {
  return (
    <div className="flex flex-col cursor-pointer m-4" onClick={onClick}>
      {icon}
      <div className="mt-1">{text}</div>
    </div>
  );
};

export default SideMenuItem;
