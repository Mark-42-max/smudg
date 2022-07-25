import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Hamburger = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="#000"
    {...props}
  >
    <Path
      d="M8.5 9.833a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM13.167 9.833a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM3.833 9.833a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667Z"
      fill="#000"
    />
  </Svg>
)

export default Hamburger