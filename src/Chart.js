import React, { Component } from 'react'
import './App.css'
import { XYFrame, ResponsiveXYFrame } from "semiotic"

//var lines = [[[1,2], [3,4], [5,8], [7,16], [9,32], [11,64], [13,128]]];

//var lines={coordinates: [{i: 100, j: 50}, {i: 200, j: 40}, {i: 300, j: 60} ] }
var lines=[{i: 100, j: 50}, {i: 200, j: 40}, {i: 300, j: 60} ]

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //data: eventData,
    }
  }
/*

          size={ [700, 300] }
        lines={ {coordinates: [{i: 100, j: 50}, {i: 200, j: 40}, {i: 300, j: 60} ] } }

          xAccessor={ d => d[0] }
          yAccessor={ d => d[1] }
          lines={ lines }

        points={[{price: 1.25, size: 15}, {price: 2.25, size: 12}]}
        pointStyle={{ fill: "blue" }}
        xAccessor={"price"}
        yAccessor={"size"}
*/

  render() {
    return(
      <div style={{border: "solid black"}}>
        <span>my chart here</span>
        <XYFrame
          xAccessor={"i"}
          yAccessor={"j"}
          lines={lines}
          />
      </div>
    )
  }
}
