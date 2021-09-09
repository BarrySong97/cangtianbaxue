import {
  FictionCatalog,
  getFictionCatalogByUrl,
  getFictionContentByUrl,
} from '@/service';
import { useBoolean, useRequest } from 'ahooks';
import { Button, List } from 'antd';
import React, { FC, useState } from 'react';
import parse from 'html-react-parser';
import { useLocation } from 'react-router';
export interface FictionProps {}
const Fiction: FC<FictionProps> = () => {
  const location = useLocation();
  const { query } = location;
  const [state, { setTrue, setFalse }] = useBoolean(false);

  const [fictionCatalog, setFictionCatalog] = useState<FictionCatalog[]>([]);
  const [content, setContent] = useState<string>('');
  const { loading } = useRequest(() => getFictionCatalogByUrl(query.url), {
    onSuccess: (data) => {
      setFictionCatalog(data);
    },
  });
  const { run: getContentRequest } = useRequest(getFictionContentByUrl, {
    manual: true,
    onSuccess: (data) => {
      setContent(data);
      setTrue();
    },
  });
  return (
    <div className="flex">
      <div className="h-screen overflow-scroll">
        <List
          size="small"
          pagination={{
            pageSize: Math.floor(window.innerHeight / 49 - 1),
          }}
          loading={loading}
          dataSource={fictionCatalog}
          renderItem={(item) => (
            <List.Item>
              <Button
                type="link"
                key={item.name}
                onClick={() => {
                  getContentRequest(item.link);
                }}
              >
                {item.name}
              </Button>
            </List.Item>
          )}
        />
      </div>

      <div className="h-screen flex-1 overflow-scroll p-4">
        {parse(content)}
      </div>
    </div>
  );
};

export default Fiction;
