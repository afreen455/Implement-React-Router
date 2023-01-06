import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Innovations from './pages/Innovations';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Navbar from './component/Navbar';
 //import {mockFile} from './component/Mock'
function App() {
  return (
    <>
    <Navbar/>
    <div className="App">

      {/* {
       mockFile.map((item,i)=>{
        return(
          <Routes>
            <Route key={i} path={item.path} element={<item.name/>}/>
        </Routes>
        )
       })
      } */}
    
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/innovations' element={<Innovations/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/careers' element={<Careers/>}/>

        
      </Routes>
    </div>
    </>
  );
}

export default App;
