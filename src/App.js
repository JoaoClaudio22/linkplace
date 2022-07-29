import './App.css';
import Locale from './components/Locale';
import MainContent from './components/MainContent';
import NotFound from './components/NotFound';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/localizacao" element={<Locale />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
