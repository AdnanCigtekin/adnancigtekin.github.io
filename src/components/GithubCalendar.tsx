



export const GithubCalendar = (calendarData) => {

    const emptyNode = <div className="calendar-node-empty"></div>
    const lightNode = <div className="calendar-node-light"></div>
    const mediumNode = <div className="calendar-node-medium"></div>
    const hardNode = <div className="calendar-node-hard"></div>
    
    

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
        {res}

    </div>
}