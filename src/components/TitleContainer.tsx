
import React, {useState, useEffect} from 'react'


import { jobTitle } from "../consts/personalInformations";
import {TitleInterface} from "../ınterfaces/PersonalInfoInterface"






export const TitleContainer = (settings:TitleInterface) => {

    const [name,setName] = useState("");
    // useEffect(() => {
    //     window.addEventListener('scroll',handleScroll)
    // },[])
    
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


    },[settings.revealSpeed]);

    return <>
         
        <p className="my-title">{name}</p>
    </>
}