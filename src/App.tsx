import './App.css'

import { Section, Wrapper } from './styles/app.styled'
import Logo from './components/Logo'
import Awards from './components/Awards'
import Metrics from './components/Metrics'

export interface AnimationTypes {
  duration: number
  delay: number
}

function App() {
  return (
    <Section className="App">
      <Logo duration={0.7} delay={0} />
      <Wrapper>
        <Metrics duration={0.7} delay={0.1} />
        <Awards duration={0.7} delay={0.2} />
      </Wrapper>
    </Section>
  )
}

export default App
