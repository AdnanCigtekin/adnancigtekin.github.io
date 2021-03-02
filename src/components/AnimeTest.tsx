
// @ts-ignore
import ReactAnime from 'react-animejs'


export default function AnimeTest(){
    const {Anime,stagger} = ReactAnime

    return <Anime
        initial={[
            {
            targets:"#Box",
            translateX : 50,
            easing: "spring",
            delay : stagger(80) 
        }
    ]}
    >

        <div id="Box" style={{height: 50, width:50, background:"#d3d"}}></div>
        <div id="Box" style={{height: 50, width:50, background:"#d3d"}}></div>
        <div id="Box" style={{height: 50, width:50, background:"#d3d"}}></div>
        <div id="Box" style={{height: 50, width:50, background:"#d3d"}}></div>
        <div id="Box" style={{height: 50, width:50, background:"#d3d"}}></div>
    </Anime>
    
}

