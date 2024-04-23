
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HOME, NOT_FOUND } from './constants/pathName';

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path={HOME} element={<NotFound />} />
            <Route path={NOT_FOUND} element={<div>not found</div>} />
         </Routes>
      </Router>
   );
};

export default App;
