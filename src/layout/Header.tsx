import { Layout, Menu } from 'antd';
const { Header} = Layout;
function HeaderCommon() {

    return (
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
        }}>
            <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        //   items={items}
          style={{ flex: 1, minWidth: 0 }}
        />

        </Header>
    )
}

export default HeaderCommon;