
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HOME, NOT_FOUND } from './constants/pathName';

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path={HOME} element={<h1>Home</h1>} />
            <Route path={NOT_FOUND} element={<NotFound />} />
         </Routes>
      </Router>
   );
};

export default App;
