import { Header } from './components/Header/Header'
import './App.scss'
import { Hero } from './components/Hero/Hero'
import { InfoPage } from './components/InfoPage/InfoPage'
import { BlogPage } from './components/BlogPage/BlogPage'

function App() {


  return (
    <div>
      <Header />
      <main>
      <Hero />
      <InfoPage />
      <BlogPage />
      </main>
    </div>
      
  )
}

export default App
