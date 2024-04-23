import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HOME, NOT_FOUND } from './constants/pathName';

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path={HOME} element={<div>home</div>} />
            <Route path={NOT_FOUND} element={<div>not_found</div>} />
         </Routes>
      </Router>
   );
};

export default App;
