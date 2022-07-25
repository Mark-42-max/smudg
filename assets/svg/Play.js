import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Play = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 11 12"
    fill="none"
    {...props}
  >
    <Path
      d="M10.507 5.254 1.477.739a.805.805 0 0 0-1.144.72v9.025a.801.801 0 0 0 1.167.72l9.007-4.515a.804.804 0 0 0 0-1.44v.005Z"
      fill="#fff"
    />
  </Svg>
)

export default Play