import { FictionCatalog } from '@/service';
import { Button, Drawer, List } from 'antd';
import React, { FC } from 'react';
export interface CatalogDrawerProps {
  onClose: () => void;
  visible: boolean;
  data: FictionCatalog[];
  loading: boolean;
  onClickCatalog: (catalogUrl: string) => void;
}
const CatalogDrawer: FC<CatalogDrawerProps> = ({
  visible,
  onClose,
  data,
  loading,
  onClickCatalog,
}) => {
  return (
    <Drawer
      title="目录"
      placement={'right'}
      closable={false}
      width={400}
      // mask={false}
      onClose={onClose}
      visible={visible}
    >
      <div>
        <List
          size="small"
          loading={loading}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Button
                type="link"
                key={item.name}
                onClick={() => {
                  onClickCatalog(item.link);
                }}
              >
                {item.name}
              </Button>
            </List.Item>
          )}
        />
      </div>
    </Drawer>
  );
};

export default CatalogDrawer;
