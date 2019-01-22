import React, { Component } from 'react'
import './App.css'
import { XYFrame, Mark, ResponsiveXYFrame } from "semiotic"

var lines=[{i: 100, j: 50}, {i: 200, j: 40}, {i: 300, j: 60} ]

const dots = [
  { user: "Giorgia Meloni", roetweet: 0.02, web: 50, follower: 636661, like:0.03, tweet:787 },
  { user: "Matteo Salvini", roetweet: 0.02, web: 46, follower: 652043, like:0.06,tweet:4762 },
  { user: "Matteo Renzi", roetweet: 0.01, web: 60, follower: 3368448,like:0.03,tweet:649 },
  { user: "Silvio Berlusconi", roetweet: 0.15, web: 44, follower: 25764,like:0.38,tweet:1551 },
  { user: "Emma Bonino", roetweet: 0.05, web: 40, follower: 157500,like:0.14,tweet:263 },
  { user: "Pietro Grasso", roetweet: 0.03, web: 28, follower: 61644,like:0.07,tweet:217 },
  { user: "Casa Pound", roetweet: 0.4, web: 100, follower: 20331,like:0.6,tweet:716 },
  { user: "Di Maio", roetweet: 0.14, web: 26, follower: 284794,like:0.25,tweet:508 },
];
export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //data: eventData,
    }
  }

  render() {
    return(
      <div style={{border: "solid black"}}>
        <span>my chart here</span>
        <XYFrame
        xExtent={ [0,100] }
        yExtent={ [0,0.6] }
        points= {dots}
        size= {[600,600]}
        customPointMark={({d}) => <Mark markType="circle" fill='#aa005588' r={d.tweet/80}  />}
        
        
        hoverAnnotation={true}
        tooltipContent={(d) => (d.user)}

        xAccessor={"web"}
        yAccessor={this.state.yAccessor}
        lineIDAccessor="id"
        margin={{"top":60,"bottom":65,"left":60,"right":20}}
        axes={[
          { orient: 'left', tickFormat: d => d },
          { orient: 'bottom', tickFormat: d => d }
        ]}
      />
      </div>
    )
  }
}
