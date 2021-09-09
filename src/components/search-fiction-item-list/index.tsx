import styles from './index.less';
import 'antd/dist/antd.less';
import { List, Card } from 'antd';
import React, { FC } from 'react';
import { FictionSearchListItem } from '@/service';

import Meta from 'antd/lib/card/Meta';
export interface SearchFictionItemListProps {
  data: FictionSearchListItem[];
  loading?: boolean;
}
const SearchFictionItemList: FC<SearchFictionItemListProps> = ({
  data,
  loading,
}) => {
  return (
    <List
      grid={{ gutter: 2, column: 8 }}
      dataSource={data}
      loading={loading}
      renderItem={(item) => (
        <List.Item>
          <Card
            hoverable
            style={{ width: 180 }}
            cover={
              <img
                alt="example"
                className="object-cover"
                height="240"
                src={item.cover}
              />
            }
          >
            <Meta title={item.title} description={item.author} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default SearchFictionItemList;
