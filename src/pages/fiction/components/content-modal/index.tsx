import React, { FC } from 'react';
import { Modal } from 'antd';
export interface ContentModalProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  content: string;
}

const ContentModal: FC<ContentModalProps> = (props) => {
  const { visible, onOk, onCancel, content } = props;

  return (
    <Modal
      title="ContentModal"
      centered
      destroyOnClose
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      {content}
    </Modal>
  );
};

export default ContentModal;
