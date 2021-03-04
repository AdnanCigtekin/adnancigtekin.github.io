

import {CareerInfoInterface} from "../ınterfaces/CareerInfoInterface";



export const CareerNode = (careerInfo:CareerInfoInterface) => {
    return <div id="Node" className="career-node">
        <div className="node-text">
            <h2>{careerInfo.info.Company}</h2>
            <h3>{careerInfo.info.Title}</h3>
            <p>{careerInfo.info.StartDate}-{careerInfo.info.EndDate}</p>
        </div>
    </div>
}