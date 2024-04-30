
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import {Home} from './pages/Home1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HOME, NOT_FOUND } from './constants/pathName';
import './App.css';

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={NOT_FOUND} element={<NotFound />} />
         </Routes>
      </Router>
   );
};

export default App;
