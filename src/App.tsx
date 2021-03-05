import './App.css';
import {CareerPath} from './components/CareerPath'
import {TitleContainer} from './components/TitleContainer'
import {ProfilePictureContainer} from "./components/ProfilePictureContainer"
import { useEffect } from 'react';
import { ContactContainer } from './components/ContactContainer';
import ArrowDown   from "./resources/chevron-double-down.svg";



function App() {



  return (
    <div style={{textAlign:'center', margin:'auto'}} >
      <div style={{width:'100vw',height:'100vh'}}>
        <ProfilePictureContainer></ProfilePictureContainer>
        <h1 className="my-name">Adnan Çığtekin</h1>
        <TitleContainer revealSpeed={75}></TitleContainer>
        <ContactContainer></ContactContainer>
        <img src={ArrowDown} style={{top:"90vh",left:"47.5vw",position:'absolute', width:"5vw"}}></img>
      </div>
        <CareerPath></CareerPath>
        <div style={{width:'10px',height:'100px'}}></div>
    </div>
  );
}

export default App;
