import { Path, Svg } from 'react-native-svg'
import { FC } from 'react'
import { APP_GRAY } from '../../../../helpers/colors'

export const Lightning: FC<{ color?: string, width?: string, height?: string, viewBox?: string }> = (
  {
    color = APP_GRAY,
    width = 18,
    viewBox = '0 0 18 26',
    height = 26,
  }) => {
  return (
    <Svg width={width} height={height} viewBox={viewBox} fill='none'>
      <Path
        d='M6.93311 24.6611L17.0269 11.6704C17.7573 10.7407 17.4585 9.97705 16.5039 9.97705H11.1582L12.6523 1.83398C12.8433 0.804688 11.7393 0.331543 11.0586 1.19482L0.964844 14.1855C0.234375 15.1235 0.533203 15.8706 1.47949 15.8706H6.8252L5.33936 24.0303C5.14844 25.0513 6.24414 25.5244 6.93311 24.6611Z'
        fill={color} />
    </Svg>
  )
}
