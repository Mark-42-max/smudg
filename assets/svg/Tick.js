import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Tick = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      d="m1.125 7.125 5.25 5.25 10.5-11.25"
      stroke="#000"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Tick