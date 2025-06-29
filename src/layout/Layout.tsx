import { Outlet } from "react-router";
const { Content } = Layout;
import { Layout } from "antd";
import HeaderCommon from "./Header";

const LayoutDefault = () => {
 
  return (
      <Layout className="min-h-screen ">
        <Layout>
            <HeaderCommon />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>

  );
};

export default LayoutDefault;