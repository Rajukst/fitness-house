import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddClasses from './WebPages/Admin/AddClasses/AddClasses';
import AddTrainer from './WebPages/Admin/AddTrainer/AddTrainer';
import MainClasses from './WebPages/Classes/ClassesMain/MainClasses';
import SingleClass from './WebPages/Classes/SingleClass/SingleClass';
import ContactUs from './WebPages/Contact/ContactUs';
import MainHome from './WebPages/HomeComponents/MainHome/MainHome';
import MyNavbar from './WebPages/HomeComponents/Navbar/MyNavbar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <MyNavbar></MyNavbar>
     <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="classes" element={<MainClasses />} />
        <Route path="services">
        <Route path=":userId" element={<SingleClass/>} />
      </Route>
   
        <Route path="add-class" element={<AddClasses />} />
        <Route path="add-trainer" element={<AddTrainer />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
