import "./Navbar.css"
import { useEffect, useState } from "react"
import logo from "../../assets/images/logo.png"

export default function Navbar () {
    const [sticky, setSticky] = useState(false);
    useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
     <img src={logo} alt="" className="logo"/>
     <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li className="btn" ><button></button>Contact us</li>
     </ul>
    </nav>
  )
}