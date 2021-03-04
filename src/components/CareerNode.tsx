

import {CareerInfoInterface} from "../ınterfaces/CareerInfoInterface";



export const CareerNode = (careerInfo:CareerInfoInterface) => {
    return <div id="Node" className="career-node">
        <div className="node-text">
                <div style={{float:'left'}}>
                    <img className="node-image" src={careerInfo.info.LogoUrl}></img>
                </div>
                <div style={{marginLeft:'10vw'}}>
                    <p className="company-text">{careerInfo.info.Company}</p>
                    <p className="title-text">{careerInfo.info.Title}</p>
                    <p className="date-text">{careerInfo.info.StartDate}-{careerInfo.info.EndDate}</p>
                </div>
        </div>
    </div>
}