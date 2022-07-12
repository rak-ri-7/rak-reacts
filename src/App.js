import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Admin from './Components/Admin';
import User from './Components/User';
import DemoForm from './Components/DemoForm';
import { CSSTransitionGroup } from 'react-transition-group'; 
import {useEffect} from 'react'; 
import Registration from './Components/Registration';
import Animation from './Components/Animation';

function App() {
  useEffect(()=>{
    document.title = `Technovalley`
  })
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/animation" element={<Animation/>}/>
      </Routes>
      {/* <Footer/> */}
     
      
    </div>
  );
}

export default App;
