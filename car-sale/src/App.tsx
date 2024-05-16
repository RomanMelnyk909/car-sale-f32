import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HOME, NOT_FOUND, BLOGS, CATEGORIES,PRODUCT, SINGLE_BLOG } from "./constants/pathName";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home/Home";
import Blogs from "./pages/Blogs";
import SingleBlog from "./pages/SingleBlog";
import Categories from "./pages/Categories/Categories";
import NotFound from "./pages/NotFound/NotFound";
import { Product } from "./pages/Product/Product";
import "./App.css";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={BLOGS} element={<Blogs />} />
          <Route path={SINGLE_BLOG} element={<SingleBlog />} />
          <Route path={CATEGORIES} element={<Categories />}></Route>
          <Route path={PRODUCT} element={<Product />} />
          <Route path={NOT_FOUND} element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
