import {
  FictionCatalog,
  getFictionCatalogByUrl,
  getFictionContentByUrl,
} from '@/service';
import { useBoolean, useRequest } from 'ahooks';
import React, { FC, useState } from 'react';
import './index.less';
import { AlignCenterOutlined, SettingOutlined } from '@ant-design/icons';
import parse from 'html-react-parser';
import { useLocation } from 'react-router';
import CatalogDrawer from '../catalog-drawer';
import SideMenuItem from '../side-menu-item';
import Loading from '@/components/loading';
export interface FictionProps {}
const FictionChapter: FC<FictionProps> = () => {
  const location = useLocation();
  const { query } = location;
  const [state, { setTrue, setFalse }] = useBoolean(false);

  const [fictionCatalog, setFictionCatalog] = useState<FictionCatalog[]>([]);
  const [content, setContent] = useState<string>('');
  const { loading, run: getCatalogRequest } = useRequest(
    () => getFictionCatalogByUrl(query.url),
    {
      manual: true,
      onSuccess: (data) => {
        setFictionCatalog(data);
      },
    },
  );
  const { run: getContentRequest, loading: contentLoading } = useRequest(
    getFictionContentByUrl,
    {
      manual: true,
      onSuccess: (data) => {
        setContent(data);
      },
    },
  );
  return (
    <div className="flex">
      <CatalogDrawer
        visible={state}
        onClose={setFalse}
        loading={loading}
        onClickCatalog={(url) => {
          getContentRequest(url);
        }}
        data={fictionCatalog}
      />
      <div className="flex-1 p-4 flex justify-center">
        <div className="relative w-1/2">
          <div className="fixed top-0">
            <SideMenuItem text="设置" icon={<SettingOutlined />} />
            <SideMenuItem
              onClick={() => {
                setTrue();
                if (!fictionCatalog.length) {
                  getCatalogRequest();
                }
              }}
              text="目录"
              icon={<AlignCenterOutlined />}
            />
          </div>
          {contentLoading ? (
            <div className="flex justify-center item-center">
              <Loading />
            </div>
          ) : (
            <div className="ml-16">{parse(content)}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FictionChapter;
