import styles from './index.less';
import 'antd/dist/antd.less';
import { Space, Button } from 'antd';
import React, { FC } from 'react';
import { FictionSearchListItem } from '@/service';

import Table, { ColumnsType } from 'antd/lib/table';
import { useHistory } from 'react-router-dom';
export interface SearchFictionItemListProps {
  data: FictionSearchListItem[];
  loading?: boolean;
}
const SearchFictionItemList: FC<SearchFictionItemListProps> = ({
  data,
  loading,
}) => {
  const history = useHistory();

  const columns: ColumnsType<FictionSearchListItem> = [
    {
      title: '书名',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <Button
          onClick={() => {
            history.push(`/fiction?url=${record.link}`);
          }}
          type="link"
        >
          {text}
        </Button>
      ),
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '最新章节',
      dataIndex: 'lastUpdateChapterTitle',
      key: 'lastUpdateChapterTitle',
      render: (text, record) => (
        <a href={record.lastUpdateChapterUrl}>{text}</a>
      ),
    },
    {
      title: '最新更新',
      dataIndex: 'lastUpdateDate',
      key: 'lastUpdateDate',
    },

    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>加入书架</a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table loading={loading} columns={columns} dataSource={data} />
    </>
  );
};

export default SearchFictionItemList;
