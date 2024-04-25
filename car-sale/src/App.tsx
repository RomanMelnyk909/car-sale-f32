import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HOME, NOT_FOUND } from './constants/pathName';
import { Home } from './pages/Home';

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={NOT_FOUND} element={<div>not found</div>} />
         </Routes>
      </Router>
   );
};

export default App;
