import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Settings7CuteFiIconProps {
  width?: number
  height?: number
  color?: string
}

export const Settings7CuteFiIcon = ({
  width = 24,
  height = 24,
  color = "#10161F",
}: Settings7CuteFiIconProps) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
      <Path fill="#fff" fillOpacity={0.01} d="M24 0v24H0V0z" />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M13 3a1 1 0 1 0-2 0v1.062a7.946 7.946 0 0 0-2.104.562l-.53-.918a1 1 0 0 0-1.732 1l.531.92c-.58.44-1.098.959-1.54 1.54l-.92-.532a1 1 0 0 0-1 1.732l.92.53A7.946 7.946 0 0 0 4.061 11H3a1 1 0 1 0 0 2h1.062c.092.737.284 1.443.562 2.104l-.918.53a1 1 0 1 0 1 1.732l.92-.531c.44.58.959 1.098 1.54 1.54l-.532.92a1 1 0 1 0 1.732 1l.53-.92c.661.279 1.367.471 2.104.563V21a1 1 0 1 0 2 0v-1.062a7.948 7.948 0 0 0 2.104-.562l.53.918a1 1 0 1 0 1.732-1l-.531-.92a8.044 8.044 0 0 0 1.54-1.54l.92.532a1 1 0 1 0 1-1.732l-.92-.53c.279-.661.471-1.367.563-2.104H21a1 1 0 1 0 0-2h-1.062a7.948 7.948 0 0 0-.562-2.104l.918-.53a1 1 0 1 0-1-1.732l-.92.531a8.046 8.046 0 0 0-1.54-1.54l.532-.92a1 1 0 1 0-1.732-1l-.53.92A7.946 7.946 0 0 0 13 4.061zm-2 8.423L7.246 13.59c-.503.29-.732.913-.44 1.415.29.502.938.607 1.44.317L12 13.155l3.754 2.167c.502.29 1.15.185 1.44-.317.292-.502.063-1.125-.44-1.415L13 11.423V7.088C13 6.508 12.58 6 12 6c-.58 0-1 .508-1 1.088z"
        clipRule="evenodd"
      />
    </Svg>
  )
}