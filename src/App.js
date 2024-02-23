import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './pages/Home'
import EventScreen from './pages/Event'
import GalleryScreen from './pages/Gallery'
// import Header from './components/Header/Header.jsx';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
        {/* <Header/> */}
          <Routes>
          <Route element={
            <HomeScreen />
            } path="/" />
          <Route path='/event/:id' element={<EventScreen />} />
          <Route path='/gallery' element={<GalleryScreen/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
