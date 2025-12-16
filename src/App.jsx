import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import About from './Components/About/About.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
         <Programs />
         <About />
      </div>
    </div>
  )
}