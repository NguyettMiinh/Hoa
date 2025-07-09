import { Outlet } from "react-router";
import HeaderCommon from "./Header";
import Footer from "./Footer";

const LayoutDefault = () => {
 
  return (
      <div>
          <HeaderCommon />
          <div>
              <Outlet />
          </div>
          <Footer />
      </div>

  );
};

export default LayoutDefault;