import GOOGLE_LOGO from '../images/play-store2x.png'
import APPLE_LOGO from '../images/badge-apple4x.png'
import { AwardsContainer } from '../styles/award-styled'

import Award from './Award'

const awardList = [
  {
    id: 0,
    imgSrc: GOOGLE_LOGO,
    title: '2018 구글 플레이스토어',
    description: '올해의 앱 최우수상 수상',
  },
  {
    id: 1,
    imgSrc: APPLE_LOGO,
    title: '2018 애플 앱스토어',
    description: '오늘의 여행앱 선정',
  },
]

export interface AwardType {
  imgSrc: string
  title: string
  description: string
}

const Awards = () => {
  const duration = 0.7
  const delay = 0.2
  return (
    <AwardsContainer duration={duration} delay={delay}>
      {awardList.map((award) => {
        return <Award key={award.id} award={award} />
      })}
    </AwardsContainer>
  )
}

export default Awards
