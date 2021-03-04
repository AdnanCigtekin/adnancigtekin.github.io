
// @ts-ignore
import ReactAnime from 'react-animejs'
import { CareerNode } from "./CareerNode";
import { careerInformation } from "../consts/careerInformation";
import {CareerInfoInterface} from "../ınterfaces/CareerInfoInterface";
import { useEffect } from 'react';
import { CheckInViewport } from "../utility/CheckInViewport";
export const CareerPath = () => {
    const {Anime,stagger} = ReactAnime
    
    useEffect(() => {
        const myItem = document.querySelector('#career-path');
        document.addEventListener('scroll', function (){
          console.log(CheckInViewport(myItem))
        })
      },[])


    return <div >
        <div id="career-path"></div>
        <Anime
            initial={[
                {
                targets:"#Node",
                translateX : '35vw',
                easing: "spring",
                delay : stagger(80) 
            }
        ]}
        >
            {careerInformation.map((element) =><CareerNode info={element}></CareerNode>
            )}
        </Anime>
    </div>
}

