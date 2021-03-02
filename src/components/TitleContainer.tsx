
import React, {useState, useEffect} from 'react'


import { jobTitle } from "../consts/personalInformations";
import {TitleInterface} from "../ınterfaces/interfaces"

export const TitleContainer = (settings:TitleInterface) => {

    const [name,setName] = useState("");

    
    useEffect(() => {
        let currentTitleIndex:number = 0;
        let tempName = "";
        const interval = setInterval(() => {
            if(tempName.length < jobTitle.length){
                const newName = tempName + jobTitle.charAt(currentTitleIndex);
                setName(newName + "|");
                tempName = newName;
                currentTitleIndex++;
            }
        },settings.revealSpeed);

        return () => {
            clearInterval(interval);
        }


    },[]);


    return <>
        <p className="fast-flicker">{name}</p>
    </>
}