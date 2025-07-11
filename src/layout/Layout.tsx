import { Outlet } from "react-router";
import HeaderCommon from "./Header";
import Footer from "./Footer";

const LayoutDefault = () => {
 
  return (
      <div>
          <HeaderCommon  />
          <div className="container-content">
              <Outlet />
          </div>
          <Footer />
      </div>

  );
};

export default LayoutDefault;