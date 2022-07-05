import { SingleAwardContainer, AwardImage } from '../styles/award.styled'

import { AwardType } from './Awards'

const Award = ({ imgSrc, title, description }: AwardType) => {
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
