import { ComicSearchListItem, search } from '@/service/comic';
import { useRequest } from 'ahooks';
import Search from 'antd/lib/input/Search';
import React, { FC, useState } from 'react';
import SearchList from './components/search-list';
export interface CommicProps {}
const Comic: FC<CommicProps> = () => {
  const [animeSearchListItem, setAnimeSearchListItem] = useState<
    ComicSearchListItem[]
  >([]);
  const { loading, run: searchRequest } = useRequest(
    (name: string) => search(name),
    {
      manual: true,
      onSuccess: (data) => {
        setAnimeSearchListItem(data);
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
      />

      <SearchList data={animeSearchListItem} loading={loading} />
    </div>
  );
};

export default Comic;
