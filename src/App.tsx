import './App.css';
import {CareerPath} from './components/CareerPath'
import {TitleContainer} from './components/TitleContainer'
import {ProfilePictureContainer} from "./components/ProfilePictureContainer"
import { useEffect } from 'react';




function App() {



  return (
    <div style={{textAlign:'center', margin:'auto'}} >
      <div style={{width:'100vw',height:'100vh'}}>
        <ProfilePictureContainer></ProfilePictureContainer>
        <h1 className="my-name">Adnan Çığtekin</h1>
        <TitleContainer revealSpeed={75}></TitleContainer>
      </div>
        <CareerPath></CareerPath>
    </div>
  );
}

export default App;
