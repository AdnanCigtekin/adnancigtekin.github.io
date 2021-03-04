
// @ts-ignore
import ReactAnime from 'react-animejs'
import { CareerNode } from "./CareerNode";
import { careerInformation } from "../consts/careerInformation";
import {CareerInfoInterface} from "../ınterfaces/CareerInfoInterface";

export const CareerPath = () => {
    const {Anime,stagger} = ReactAnime



    return <Anime
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
    
}

