// import React,{useEffect,createContext,useReducer,useContext} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/home';
import './App.css';
// export const UserContext = createContext();


const Routing = ()=>{
  // const Navigate = useNavigate();
  console.log('h');
  return(
    <Routes>
      <Route exact path="/home" >
        <Home />
      </Route>
    </Routes>
  )
}

function App() {
  return(
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
