import logo from './logo.svg';
import './App.css';
import {CareerPath} from './components/CareerPath'
import {TitleContainer} from './components/TitleContainer'
import {ProfilePictureContainer} from "./components/ProfilePictureContainer"

function App() {
  return (
    <div style={{textAlign:'center', margin:'auto'}}>
      <ProfilePictureContainer></ProfilePictureContainer>
      <h1>Adnan Çığtekin</h1>
      <TitleContainer revealSpeed={75}></TitleContainer>
      <CareerPath></CareerPath>
    </div>
  );
}

export default App;
