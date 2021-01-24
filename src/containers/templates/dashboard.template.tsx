import { Layout } from "antd";
import React, { useState } from "react";

const { Header, Sider, Content } = Layout;

interface DashboardTemplateProps {
  SiderComponent: React.FC<{ collapsed: boolean }>;
  HeaderComponent: React.FC<{ collapsed: boolean; toggle: () => void }>;
  ContentComponent: React.FC;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  SiderComponent,
  HeaderComponent,
  ContentComponent
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(prev => !prev);
  };
  return (
    <div>
      <Layout className="min-h-screen">
        <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
          <SiderComponent collapsed={collapsed} />
        </Sider>
        <Layout>
          <Header className=" mx-1 py-4 px-0 h-32 bg-white">
            <HeaderComponent toggle={toggle} collapsed={collapsed} />
          </Header>
          <Content className="m-2 h-full">
            <ContentComponent />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
