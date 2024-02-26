import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import Layout from "./templates/layout";
import Home from "./pages/home/home";
import Cart from "./pages/cart";
import ProductDeatails from "./pages/productDeatails";
import ProductClb from "./pages/productClb";
import ProductNation from "./pages/productNation";
import CafeSport from "./pages/cafeSport";
import CheckOut from "./pages/checkout";
import NotFound from "./pages/notFound";

import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <Routes>
      <Route path={path.PUBLIC_LAYOUT} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={path.AO_CLB} element={<ProductClb />} />
        <Route path={path.AO_DOI_TUYEN} element={<ProductNation />} />
        <Route path={path.CHECKOUT} element={<CheckOut />} />
        <Route path={path.CART} element={<Cart />} />
        <Route path={path.CAFE_SPORT} element={<CafeSport />} />
      </Route>
      <Route path={path.LOGIN} element={<Login />} />
      <Route path={path.REGISTER} element={<Register />} />
      <Route path={path.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;
