import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './WebPages/Contact/ContactUs';
import MainHome from './WebPages/HomeComponents/MainHome/MainHome';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
