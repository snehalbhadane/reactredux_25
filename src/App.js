
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Competency from './components/Competency';
const App=()=> {//component created by default by using JS5 and JSX-Javascript XML//ES^ style for writing comp
  return (
    <BrowserRouter>
    <div className="d-flex flex-column min-vh-100">
  <Header/>
  <div className="flex-grow-1">
   <Routes>
   <Route path="/dashboard" element={<Dashboard/>}/>
   <Route path="/competency" element={<Competency/>}/>
    </Routes>
 </div>
  <Footer/>
 </div>
       
    </BrowserRouter>
 
    
  
  );
}

export default App;
 
