import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CategoryIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={7}
    fill="none"
    {...props}
  >
    <Path
      d="M4 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 1 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-2-3A.5.5 0 0 1 .5 0h11a.5.5 0 0 1 0 1H.5A.5.5 0 0 1 0 .5Z"
      fill="#000"
    />
  </Svg>
)

export default CategoryIcon
