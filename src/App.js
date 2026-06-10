import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import footer from './components/footer/footer';
import homePage from './components/homePage/homePage';
import header from './components/header/header';

function AppContent() {
  //чут чут перелопаченный контент
  return (
    <div className="app-wrapper">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<homePage />} />
        </Routes>
      </main>

    </div>
  );
}
// Маршрутка теперь вот тут
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;