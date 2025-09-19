import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Technology from './components/Technology'
import Ecosystem from './components/Ecosystem'
import Developers from './components/Developers'
import Community from './components/Community'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Technology />
        <Ecosystem />
        <Developers />
        <Community />
      </main>
      <Footer />
    </div>
  )
}

export default App

