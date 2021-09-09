import {
  FictionCatalog,
  getFictionCatalogByUrl,
  getFictionContentByUrl,
} from '@/service';
import { useBoolean, useRequest } from 'ahooks';
import { Button } from 'antd';
import React, { FC, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import ContentModal from './components/content-modal';
export interface FictionProps {}
const Fiction: FC<FictionProps> = () => {
  const location = useLocation();
  const { query } = location;
  const [state, { setTrue, setFalse }] = useBoolean(false);

  const [fictionCatalog, setFictionCatalog] = useState<FictionCatalog[]>([]);
  const [content, setContent] = useState<string>('');
  useRequest(() => getFictionCatalogByUrl(query.url), {
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
    <div>
      {fictionCatalog.map((v) => (
        <Button
          type="link"
          key={v.name}
          onClick={() => {
            getContentRequest(v.link);
          }}
        >
          {v.name}
        </Button>
      ))}

      <ContentModal
        visible={state}
        content={content}
        onCancel={setFalse}
        onOk={setTrue}
      />
    </div>
  );
};

export default Fiction;
