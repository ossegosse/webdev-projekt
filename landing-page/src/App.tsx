import { Header } from './components/Header/Header'
import './App.scss'
import { Hero } from './components/Hero/Hero'
import { InfoPage } from './components/InfoPage/InfoPage'

function App() {


  return (
    <div>
      <Header />
      <main>
      <Hero />
      <InfoPage />
      </main>
    </div>
      
  )
}

export default App
