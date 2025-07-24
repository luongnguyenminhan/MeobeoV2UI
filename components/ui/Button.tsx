import React from 'react';
import { Button as AntdButton } from 'antd';

interface ButtonProps {
  href?: string;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  htmlType?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  href,
  type = 'primary',
  children,
  onClick,
  style,
  icon,
  htmlType,
}) => {
  if (href) {
    return (
      <AntdButton
        type={type}
        href={href}
        style={style}
        icon={icon}
        htmlType={htmlType}
      >
        {children}
      </AntdButton>
    );
  }
  return (
    <AntdButton
      type={type}
      onClick={onClick}
      style={style}
      icon={icon}
      htmlType={htmlType}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
