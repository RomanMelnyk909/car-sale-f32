import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./components/Home/Home";
import Categories from "./pages/Categories/Categories";
import Blogs from "./pages/Blogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HOME, NOT_FOUND, BLOGS, CATEGORIES } from "./constants/pathName";
import Header from "./components/Header/Header";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={BLOGS} element={<Blogs />} />
          <Route path={CATEGORIES} element={<Categories />}></Route>
          <Route path={NOT_FOUND} element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
