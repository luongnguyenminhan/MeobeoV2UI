import React from 'react';
import { Alert as AntdAlert } from 'antd';

interface AlertProps {
  status?: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  description?: string;
}

export function Alert({ status = 'info', title, description }: AlertProps) {
  return (
    <AntdAlert
      type={status}
      message={title}
      description={description}
      showIcon={!!title || !!description}
    />
  );
}
