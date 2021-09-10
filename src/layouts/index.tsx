import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { Layout, Menu, Breadcrumb } from 'antd';
import React, { FC } from 'react';
import SubMenu from 'antd/lib/menu/SubMenu';
import { MailOutlined } from '@ant-design/icons';
export interface LayoutProps {}
const LayoutIndex: FC<LayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key={'home'}>首页</Menu.Item>
          <Menu.Item key={'fiction'}>小说</Menu.Item>

          <Menu.Item key={'tv'}>电视剧</Menu.Item>
          <Menu.Item key={'moive'}>电影</Menu.Item>
          <Menu.Item key={'anime'}>动漫</Menu.Item>
          <Menu.Item key={'commic'}>漫画</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutIndex;
