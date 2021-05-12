import ReactAnime from 'react-animejs'



export const GithubCalendar = (calendarData) => {

    const {Anime,stagger} = ReactAnime

    const emptyNode = <div className="calendar-node-empty" id="calendar-node"></div>
    const lightNode = <div className="calendar-node-light" id="calendar-node"></div>
    const mediumNode = <div className="calendar-node-medium" id="calendar-node"></div>
    const hardNode = <div className="calendar-node-hard" id="calendar-node"></div>
    
    

    let res = [];
    let currentColumn = []

    for(const element of calendarData.calendarData) {
        if (parseInt(element) == 0) {
            console.log("is empty")
            currentColumn.push(emptyNode)
        }else if(parseInt(element) == 1){
            currentColumn.push(lightNode)
        }else if(parseInt(element) <4){
            currentColumn.push(mediumNode)
        }else{
            currentColumn.push(hardNode)

        }
        if(currentColumn.length == 7){
            res.push(<span className="calendar-column">{currentColumn}</span>)
            currentColumn = []
        }
    };
    res.push(<span className="calendar-column">{currentColumn}</span>)


    return <div>
                    <Anime
            initial={[
                {
                targets:"#calendar-node",
                translateX : '99.75vw',
                rotate: '5turn',
                easing: "spring(1,50,50,0)",
                delay : stagger(5) 
            }
        ]}
        ></Anime>
        {res}

    </div>
}