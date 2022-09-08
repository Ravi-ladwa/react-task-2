import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";
function Layout() {
  return (
    <>
      <div class="layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
export default Layout;