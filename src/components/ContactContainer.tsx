import  GithubIcon  from "../resources/github.svg";
import LinkedinIcon from "../resources/linkedin.svg"
import MailIcon from "../resources/envelope-fill.svg";


export const ContactContainer = () => {


    return <div>

        <a href="https://github.com/AdnanCigtekin" target="_blank">
            <img src={GithubIcon}/>
        </a>
        <a href="https://www.linkedin.com/in/adnancigtekin/" target="_blank">
            <img src={LinkedinIcon}/>
        </a>
        <a href="mailto:cigtekinadnan@gmail.com" >
            <img src={MailIcon}/>
        </a>       
    </div>
}