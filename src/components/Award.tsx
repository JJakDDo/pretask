import { SingleAwardContainer, AwardImage } from '../styles/award.styled'

import { AwardType } from './Awards'

interface AwardProps {
  award: AwardType
}

const Award = ({ award }: AwardProps) => {
  const { imgSrc, title, description } = award
  return (
    <SingleAwardContainer>
      <AwardImage src={imgSrc} alt={title} />
      <p>
        {title}
        <br />
        {description}
      </p>
    </SingleAwardContainer>
  )
}

export default Award
