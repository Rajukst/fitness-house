import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddClasses from './WebPages/Admin/AddClasses/AddClasses';
import MainClasses from './WebPages/Classes/ClassesMain/MainClasses';
import ContactUs from './WebPages/Contact/ContactUs';
import MainHome from './WebPages/HomeComponents/MainHome/MainHome';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="classes" element={<MainClasses />} />
        <Route path="add-class" element={<AddClasses />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
