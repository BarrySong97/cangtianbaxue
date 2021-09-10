import styles from './index.less';
import 'antd/dist/antd.less';
import { Input } from 'antd';
import React, { FC, useState } from 'react';
import useRequest from '@ahooksjs/use-request';
import { FictionSearchListItem, search } from '@/service';
import SearchFictionItemList from '@/components/search-fiction-item-list';
const { Search } = Input;

export default function Fiction() {
  const [fictionSearchListItem, setFictionSearchListItem] = useState<
    FictionSearchListItem[]
  >([]);
  const { loading, run: searchRequest } = useRequest(
    (name: string) => search(name),
    {
      manual: true,
      onSuccess: (data) => {
        setFictionSearchListItem(data);
      },
    },
  );
  const onSearch = (name: string) => {
    searchRequest(name);
  };
  return (
    <div className="p-4">
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        className="mb-4"
        style={{ width: 200 }}
      />

      <SearchFictionItemList data={fictionSearchListItem} loading={loading} />
    </div>
  );
}
