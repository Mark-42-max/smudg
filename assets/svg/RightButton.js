import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const RightButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={12} r={12} fill="#F0F0F0" />
    <Path
      d="m9.667 7.334 4.666 4.667-4.666 4.666"
      stroke="#000"
      strokeWidth={1.167}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default RightButton