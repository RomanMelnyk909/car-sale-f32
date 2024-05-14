
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Home from './components/Home';
import { Product } from "./pages/Product/Product";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HOME, NOT_FOUND, PRODUCT } from './constants/pathName';
import './App.css';

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={PRODUCT} element={<Product />} />
            <Route path={NOT_FOUND} element={<NotFound />} />
         </Routes>
         
      </Router>
   );
};

export default App;
