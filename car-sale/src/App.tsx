
import './App.css';
import NotFound from "./pages/NotFound/NotFound";
import Home from './components/Home/Home';
import Categories from './pages/Categories/Categories';
import Blog from './pages/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HOME, NOT_FOUND, BLOG, CATEGORIES } from './constants/pathName';
import './App.css';

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={BLOG} element={<Blog />} />
            <Route path={CATEGORIES} element={<Categories />}></Route>
            <Route path={NOT_FOUND} element={<NotFound />} />
         </Routes>
      </Router>
   );
};

export default App;
