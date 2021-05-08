import axios from "axios";
import { useEffect, useState } from "react";
import { devServer, IS_DEVELOPMENT, releaseServer } from "../consts/adressList";
import {GithubRequestInterface} from '../ınterfaces/GithubRequestInterface'
export const GithubContribution = () => {

  const headers = {
    'Access-Control-Allow-Methods' : 'GET'
  };

  const [contribObj,setContribObj] = useState({} as GithubRequestInterface);
  const [contribCount,setContribCount] = useState(0);


  useEffect(() => {
    axios.get(IS_DEVELOPMENT == 1 ? `${devServer}/gh_scrape` : `${releaseServer}/gh_scrape`,{headers})
    .then(response => setContribObj(response.data as GithubRequestInterface))
    .catch(error => {
        console.error('There was an error!', error);
    })
  }, []);

  useEffect(() => {
    if(contribObj !== undefined){
        console.log(contribObj.contributionCount)
        console.log(contribObj.contributionCalendar)
    }
  },[contribObj])

  return (
    <div>
      <h2>Contributions here</h2>
    </div>
  );
};
