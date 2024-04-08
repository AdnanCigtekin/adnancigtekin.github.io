import axios from "axios";
import React, { useEffect, useState } from "react";
import { devServer, IS_DEVELOPMENT, releaseServer } from "../consts/adressList";
import { GithubRequestInterface } from "../interfaces/GithubRequestInterface";
import { CheckInViewport } from "../utility/CheckInViewport";
import ReactAnime from "react-animejs";
import ReactLoading from "react-loading";
import { GithubCalendar } from "./GithubCalendar";
import GithubIcon from "../resources/github.svg";

export const GithubContribution = () => {
  const { Anime } = ReactAnime;
  const [contribObj, setContribObj] = useState({} as GithubRequestInterface);
  const [contribCount, setContribCount] = useState(-1);
  const [contribCalendar, setContribCalendar] = useState([]);

  const [scrolledTo, setScrolledTo] = useState(false);
  const [showPath, setShowPath] = useState(false);

  const [backendAwake, setBackendAwake] = useState(false);

  useEffect(() => {
    if (backendAwake !== undefined) {
      const wakeInterval = setInterval(() => {
        axios
          .get(
            IS_DEVELOPMENT === 1 ? `${devServer}/wake` : `${releaseServer}/wake`
          )
          .then((response) => {
            if (response.status == 200) {
              setBackendAwake(true);
              console.log("Server woke");
              clearInterval(wakeInterval);
            }
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      }, 1000);
    }
  }, [backendAwake]);

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
    if (backendAwake) {
      axios
        .get(
          IS_DEVELOPMENT === 1
            ? `${devServer}/gh_scrape`
            : `${releaseServer}/gh_scrape`
        )
        .then((response) =>
          setContribObj(response.data as GithubRequestInterface)
        )
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  }, [backendAwake]);

  useEffect(() => {
    if (contribObj !== undefined) {
      console.log(contribObj.contributionCount);
      console.log(contribObj.contributionCalendar);
      setContribCount(contribObj.contributionCount);
      setContribCalendar(contribObj.contributionCalendar);
    }
  }, [contribObj]);

  return (
    <div>
      <div id="github-contribution"></div>
      {showPath === false || contribCount === undefined ? (
        <div className="github-panel">

            
            <a
              className="scraper-source"
              href="https://github.com/AdnanCigtekin/github-scraper"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={GithubIcon}
                style={{ width: "2vw", padding: "2vh" }}
                alt="Github scraper source code"
              />
              <div>
              <p className="scraper-source-text">Source</p>

              </div>
            </a>


          <div style={{ width: "30vh", height: "50%", margin: "auto" }}>
            <ReactLoading
              type={"cylon"}
              color={"#ffffff"}
              width={"30vh"}
              height={"50%"}
            />
          </div>
        </div>
      ) : (
        <div className="github-panel">
          <a
            className="scraper-source"
            href="https://github.com/AdnanCigtekin/github-scraper"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={GithubIcon}
              style={{ width: "2vw", padding: "2vh" }}
              alt="Github scraper source code"
            />
            <div>
             <p className="scraper-source-text">Source</p>

            </div>
          </a>
          <div className="github-contrib-count">
            <Anime
              initial={[
                {
                  targets: "#contribCount",
                  innerText: [0, contribCount],
                  easing: "easeOutElastic(1, .1)",
                  round: true,
                  update: function (a) {
                    const value = a.animations[0].currentValue;
                    document.querySelector("#contribCount").innerHTML = value;
                  },
                  duration: 3000,
                },
              ]}
            ></Anime>
            <h1>
              <span id="contribCount">{contribCount}</span>
            </h1>{" "}
            contributions in github in the last year!
          </div>
          <GithubCalendar calendarData={contribCalendar}></GithubCalendar>
        </div>
      )}
    </div>
  );
};
