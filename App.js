import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route

}from "react-router-dom";

import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';




function App() {
  return (
    <Router>
    <div >
      <Routes>
      

        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/createuser' element={<SignUp/>}/>
        
        
        
       
        
      </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;
