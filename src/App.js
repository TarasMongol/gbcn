import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import HomePage from './components/homePage/homePage';
import Header from './components/header/header';
import StPage from './components/stPage/stPage';
import TouPage from './components/touPage/touPage';

function AppContent() {
  //чут чут перелопаченный контент
  return (
    <div className="app-wrapper">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
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