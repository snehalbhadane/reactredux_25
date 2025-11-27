
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './component/layout/RootLayout';
import Home from './component/home/Home';
const App=()=> {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
          <Route  index element={<Home/>}/>
          </Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
