import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter, Router,Route, Routes} from "react-router-dom"
import Emp_login from './Components/Emp_login';
import Navbar from './Components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <div>
<Routes>
  <Route path='/Emp_login' element={[<Navbar/>,<Emp_login/>]}/>
  <Route path='/Navbar' element={<Navbar/>}/>
  
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
