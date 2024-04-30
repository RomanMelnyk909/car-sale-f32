
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Home from './components/Home';
import Blog from "./pages/Blog/";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HOME, NOT_FOUND, BLOG } from './constants/pathName';
import './App.css';

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={NOT_FOUND} element={<NotFound />} />
            <Route path={BLOG} element={<Blog />} />
         </Routes>
      </Router>
   );
};

export default App;
