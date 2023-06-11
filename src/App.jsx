import {
  BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom';

import routes from './const/routes.js';
import CallsPage from './pages/CallsPage/CallsPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import './styles/App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.mainPagePath()} element={<Navigate to={routes.callsPagePath()} />} />
      <Route path={routes.callsPagePath()} element={<CallsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
  