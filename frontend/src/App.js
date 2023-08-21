import './App.css';
// import './index.css';
import Practice from './components/Practice';
import NavBar from './components/NavBar';
import Login from './components/login';
import SignUp from './components/signup';
import AirPollution from './components/AirPollution' ;
import Compare from './components/Compare';
import Weather from './components/Weather';
import Home from './components/Home' ;
import AvgSalary from './components/AvgSalary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
function App() {
  const [str1, setstr1] = useState("");
  const [Userid,setUserid]=useState("")
  function changestr1(newstr) {
    setstr1(newstr);
  }
  useEffect(() => {
    
    
    document.body.style.backgroundImage = `url(${"./abc.jpg"})`
    document.body.style.height = "100%";
    document.body.style.backgroundSize = "1920px 1080px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }, [])
  return (

    <BrowserRouter>
      <div id="main1">
        <NavBar func={changestr1} uid={Userid} />
      </div>
      <div className="mt-5  container" >
        <Routes >
          <Route exact path="/Practice" element={<Practice />} />
          <Route exact path="/Search" element={<Search str={str1} />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/AvgSalary" element={<AvgSalary />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Compare" element={<Compare />} />
          <Route exact path="/Weather" element={<Weather />} />
          <Route exact path="/AirPollution" element={<AirPollution />} />


        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;