
// @ts-ignore
import ReactAnime from 'react-animejs'
import { CareerNode } from "./CareerNode";
import { careerInformation } from "../consts/careerInformation";
import { useEffect, useState } from 'react';
import { CheckInViewport } from "../utility/CheckInViewport";

export const CareerPath = () => {
    const {Anime,stagger} = ReactAnime
    const [scrolledTo,setScrolledTo] = useState(false);
    const [showPath,setShowPath] = useState(false);
    
    useEffect(() => {
        const myItem = document.querySelector('#career-path');
        document.addEventListener('scroll', function (){
              setScrolledTo(CheckInViewport(myItem))
        })
      },[])

    useEffect(() => {
        if(scrolledTo !== undefined && scrolledTo === true)
            setShowPath(true)
    },[scrolledTo])

    return <div >
        <div id="career-path"></div>
        {showPath === false ? 
        <div style={{width:'10px',height:'100px'}}></div>

            :
            <Anime
            initial={[
                {
                targets:"#Node",
                translateX : '27.5vw',
                easing: "spring",
                delay : stagger(500) 
            }
        ]}
        >
            {careerInformation.map((element) =><CareerNode info={element}></CareerNode>
            
            )}
        </Anime>
        
        }

    </div>
}

