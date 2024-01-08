
import './App.css';
import api from "./API/axiosConfig";
import { useState, useEffect } from 'react';

function App() {

  const [songs, setSongs] = useState();

  const getSongs = async () =>{

    try{
      const response = await api.get("/api/v1/songs");
      setSongs(response.data);
    } catch(err){
      console.log(err);
    }
  }
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
