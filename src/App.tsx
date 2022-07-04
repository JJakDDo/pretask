import './App.css'

import { Section, Wrapper } from './styles/app.styled'
import Logo from './components/Logo'
import Awards from './components/Awards'
import Metrics from './components/Metrics'

function App() {
  return (
    <Section className="App">
      <Logo />
      <Wrapper>
        <Metrics />
        <Awards />
      </Wrapper>
    </Section>
  )
}

export default App
