
// @ts-ignore
import ReactAnime from 'react-animejs'


const {Anime,stagger} = ReactAnime
export default function AnimeTest(){

    return <Anime
        initial={[
            {
            targets:"#Box",
            translateX : 50,
            easign : "linear"
        }
    ]}
    >
        <div id="Box" style={{height: 50, width:50, background:"#d3d"}}></div>
    </Anime>
    
}

