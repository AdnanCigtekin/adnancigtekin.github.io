import  GithubIcon  from "../resources/github.svg";
import LinkedinIcon from "../resources/linkedin.svg"
import MailIcon from "../resources/envelope-fill.svg";


export const ContactContainer = () => {


    return <div>
        <a href="https://www.linkedin.com/in/adnancigtekin/" rel="noreferrer" target="_blank">
            <img src={LinkedinIcon} style={{width:"5vw",padding:"2vh"}} alt="My Linkedin Account"/>
        </a>
        <a href="https://github.com/AdnanCigtekin" rel="noreferrer" target="_blank">
            <img src={GithubIcon} style={{width:"5vw",padding:"2vh"}} alt="My Github Account"/>
        </a>

        <a href="mailto:cigtekinadnan@gmail.com" >
            <img src={MailIcon} style={{width:"5vw",padding:"2vh"}} alt="Send A Mail To Me!"/>
        </a>       
    </div>
}