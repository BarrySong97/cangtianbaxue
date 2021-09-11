import { ComicSearchListItem } from '@/service/comic';
import { useBoolean } from 'ahooks';
import { Card, List, Skeleton } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FC } from 'react';
export interface SearchListProps {
  data: ComicSearchListItem[];
  loading?: boolean;
}
const SearchList: FC<SearchListProps> = ({ data, loading }) => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        grid={{
          gutter: 16,
          column: 7,
        }}
        loading={loading}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={<img alt={item.title} height={278} src={item.cover} />}
            >
              <Meta title={item.title} description={item.lastUpdate} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SearchList;
