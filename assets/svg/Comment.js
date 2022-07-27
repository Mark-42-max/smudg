import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Comment = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.isClicked ? '#000' : 'none'}
    stroke={props.isClicked ? 'none' : '#000'}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-message-square"
    {...props}
  >
    <Path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Svg>
)

export default Comment