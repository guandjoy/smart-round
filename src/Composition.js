import React from "react";
import { morphing } from "primitivo-svg";

function Composition(props) {
  const getPathParams = (width, height, numOfSegments, radians, rotate) => {
    return {
      numOfSegments,
      depth: 0,
      x: 50 - width / 2,
      y: 50 - height / 2,
      width,
      height,
      centerX: width / 2,
      centerY: height / 2,
      rotate,
      numOfGroups: 1,
      groups: [
        [
          {
            type: "radial",
            incircle: true,
            round: 0,
            distance: 1,
            radians
          }
        ],
        [
          {
            type: "radial",
            incircle: true,
            smartRound: true,
            adaptArms: true,
            round: 1,
            distance: 1,
            radians
          }
        ]
      ]
    };
  };

  const getDValues = (width, height, numOfSegments, radians, rotate) => {
    let pathParams = getPathParams(
      width,
      height,
      numOfSegments,
      radians,
      rotate
    );
    let morphParams = {
      numOfKeyPaths: 2,
      loop: true
    };
    let { dValues } = morphing(morphParams, pathParams);
    return dValues;
  };

  const pathAttributes = {
    stroke: "white",
    fill: "transparent",
    strokeWidth: "3px",
    vectorEffect: "non-scaling-stroke"
  };

  const animateAttributes = {
    attributeName: "d",
    dur: "2.4s",
    repeatCount: "indefinite",
    calcMode: "spline",
    keyTimes: "0; 0.5; 1",
    keySplines: ".75, 0, .25, 1; .75, 0, .25, 1;"
  };

  return (
    <svg className="composition" viewBox="0 0 100 100">
      <path {...pathAttributes}>
        <animate
          {...animateAttributes}
          values={getDValues(98, 98, 5, [0, 0.5, 1.08, 3.14, 4.18], 0)}
        />
      </path>
      <path {...pathAttributes}>
        <animate
          {...animateAttributes}
          values={getDValues(90, 90, 2, undefined, 0)}
        />
      </path>
      <path {...pathAttributes}>
        <animate
          {...animateAttributes}
          values={getDValues(82, 82, 3, [0, 1.04, 4.18], 0)}
        />
      </path>
      <path {...pathAttributes}>
        <animate
          {...animateAttributes}
          values={getDValues(32, 32, 4, [0, 1.04, 2.09, 3.1415], 0)}
        />
      </path>
    </svg>
  );
}

export default Composition;
