
import './App.css';
import api from "./API/axiosConfig";
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
function App() {
  const [songs, setSongs] = useState();

  const getSongs = async () => {
    try {
      const response = await api.get("/api/v1/songs");
      setSongs(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getSongs();
  }, [])

  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>} ></Route>
         
         </Route>
      </Routes>
    </div>
  );
}

export default App;