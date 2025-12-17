import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'


export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
         <Programs />
         <About />
         <Title subTitle="Gallery" title="Campus Photos" />
         <Campus />
         <Title subTitle="TESTIMONIALS" title="What Students Say" />
         <Testimonials />
         <Title subTitle="Contact Us" title="Get In Touch" />
         <Contact />
         <Footer />
      </div>
    </div>
  )
}