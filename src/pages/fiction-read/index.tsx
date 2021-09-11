import {
  FictionCatalog,
  FictionContent,
  getFictionCatalogByUrl,
  getFictionContentByUrl,
} from '@/service/fiction';
import { useBoolean, useRequest } from 'ahooks';
import React, { FC, useState } from 'react';
import './index.less';
import { AlignCenterOutlined, SettingOutlined } from '@ant-design/icons';
import parse from 'html-react-parser';
import { useLocation } from 'react-router';
import CatalogDrawer from './components/catalog-drawer';
import SideMenuItem from './components/side-menu-item';
import { Button } from 'antd';
import Skeleton from 'react-loading-skeleton';
export interface FictionProps {}
const FictionChapter: FC<FictionProps> = () => {
  const location = useLocation();
  const { query } = location;
  const [state, { setTrue, setFalse }] = useBoolean(false);

  const [fictionCatalog, setFictionCatalog] = useState<FictionCatalog[]>([]);
  const [fictionContent, setFictionContent] = useState<FictionContent>();
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
        setFictionContent(data);
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

          <div className="ml-16">
            {contentLoading ? (
              <Skeleton count={20} />
            ) : (
              parse(fictionContent?.content ?? '')
            )}

            <div className="flex justify-between w-full p-4">
              <Button
                onClick={() => {
                  if (fictionContent?.prevLink) {
                    getContentRequest(fictionContent?.prevLink);
                  }
                }}
              >
                上一章
              </Button>
              <Button
                onClick={() => {
                  if (fictionContent?.nextLink) {
                    getContentRequest(fictionContent?.nextLink);
                  }
                }}
              >
                下一章
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FictionChapter;
