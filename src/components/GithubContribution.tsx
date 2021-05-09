import axios from "axios";
import React, { useEffect, useState } from "react";
import { devServer, IS_DEVELOPMENT, releaseServer } from "../consts/adressList";
import { GithubRequestInterface } from "../ınterfaces/GithubRequestInterface";
import { CheckInViewport } from "../utility/CheckInViewport";
import ReactAnime from 'react-animejs'

export const GithubContribution = () => {
const {Anime,stagger} = ReactAnime
  const [contribObj, setContribObj] = useState({} as GithubRequestInterface);
  const [contribCount, setContribCount] = useState(0);

  const [scrolledTo, setScrolledTo] = useState(false);
  const [showPath, setShowPath] = useState(false);

  const [continueTimer, setContinueTimer] = useState(false);

  useEffect(() => {
    const myItem = document.querySelector("#github-contribution");
    document.addEventListener("scroll", function () {
      setScrolledTo(CheckInViewport(myItem));
    });
  }, []);

  useEffect(() => {
    if (scrolledTo !== undefined && scrolledTo === true) setShowPath(true);
  }, [scrolledTo]);

  useEffect(() => {
    axios
      .get(
        IS_DEVELOPMENT == 1
          ? `${devServer}/gh_scrape`
          : `${releaseServer}/gh_scrape`
      )
      .then((response) =>
        setContribObj(response.data as GithubRequestInterface)
      )
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  useEffect(() => {
    if (contribObj !== undefined) {
      console.log(contribObj.contributionCount);
      console.log(contribObj.contributionCalendar);
      setContribCount(contribObj.contributionCount);

    }
  }, [contribObj]);

  return (
    <div>
      <div id="github-contribution"></div>
      {showPath === false || contribCount == 0 || contribCount === undefined ? (
        <div></div>
      ) : (
        <div className="github-panel">


            <div className="github-contrib-count">
            <Anime
            initial={[
                {
                targets:"#contribCount",
                innerText: [0, contribCount],
                easing: "easeOutElastic(1, .1)",
                round: true,
                update: function(a) {
                 
                    const value = a.animations[0].currentValue;
                    document.querySelector("#contribCount").innerHTML = value;

                },
                duration: 3000
            }
            ]}
            >
                </Anime>
                <h1><span id="contribCount">{contribCount}</span></h1> contributions in the last year!
                </div>
          
        </div>
      )}
    </div>
  );
};
