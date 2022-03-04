import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import {Navbar} from './pages/Navbar';
import {Routes,Route} from 'react-router-dom'
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { ContactUsDetail } from './pages/ContactUsDetail';
import { Electronics } from './pages/Electronics';
import { Fashion } from './pages/Fashion';
import { Groc } from './pages/Groc';
import { SimpleForm } from './componants/SimpleForm';
import {AddData} from './pages/AddData'
import { Signup } from './componants/Signup';


function App() {

  

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path ="/home" element = {<Home/>}></Route>
        <Route path ="/aboutus" element = {<AboutUs/>}></Route>
        <Route path ="/contactus" element = {<ContactUs/>}></Route>
        <Route path ="/contactus/:id" element = {<ContactUsDetail/>}></Route>
        <Route path ="/eletronics" element = {<Electronics/>}></Route>
        <Route path ="/fashion" element = {<Fashion/>}></Route>
        <Route path ="/g" element = {<Groc/>}></Route>
        <Route path ="/simpleform" element = {<SimpleForm/>}></Route>
        <Route path ='/addData'  element={<AddData/>}></Route>
        <Route path ='/signup'  element={<Signup/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
