import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter, Router,Route, Routes} from "react-router-dom"
import Emp_login from './Components/Emp_login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Emp_forget from './Components/Emp_forget';
import Admin_login from './Components/Admin_login';
import Emp_signup from './Components/Emp_signup';


function App() {
  return (
    <BrowserRouter>
    <div>
<Routes>
<Route path='/Admin' element={[<Navbar/>,<Admin_login/>,<Footer/>]}/>
  <Route path='/Emp_login' element={[<Navbar/>,<Emp_login/>,<Footer/>]}/>
  <Route path='/Navbar' element={<Navbar/>}/>
  <Route path='/Footer' element={<Footer/>}></Route>
  <Route path='/Emp_forget' element={[<Navbar/>,<Emp_forget/>,<Footer/>]}></Route>
  <Route path='/Emp_signup' element={[<Emp_signup/>]}></Route>

  
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
