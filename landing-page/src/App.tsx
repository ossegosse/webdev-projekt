import { Header } from './components/Header/Header'
import './App.scss'
import { Hero } from './components/Hero/Hero'
import { InfoPage } from './components/InfoPage/InfoPage'
import { BlogPage } from './components/BlogPage/BlogPage'
import { Footer } from './components/Footer/Footer'

function App() {


  return (
    <div>
      <Header />
      <main>
      <Hero />
      <InfoPage />
      <BlogPage />
      </main>
      <Footer />
    </div>
      
  )
}

export default App
