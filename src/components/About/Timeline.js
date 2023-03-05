import React from 'react';
import './Timeline.css';
import { Chrono } from "react-chrono";
import {timelineData} from "../utils/Data"

const Timeline = () => {
  return (
    <div id="timeline">
     <Chrono items={timelineData}  mode="VERTICAL_ALTERNATING" twoColumns cardHeight="100" cardWidth="300" disableAutoScrollOnClick disableClickOnCircle  hideControls="true" disableNavOnKey theme={{
      primary: '#253E8F',
      secondary: 'transparent',
      
    }}>
       {
         timelineData.map((data) =>(
          <div key={data.name}>
          <h3>{data.maintitle}</h3>
          <p>
            {data.name}
          </p>
        </div>
         ))
       }
     
       </Chrono>
    </div>
  );
};
export default Timeline;
