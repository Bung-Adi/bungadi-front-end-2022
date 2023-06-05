import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import AdiLogo from "../assets/Adi.webp"
import CloseBtn from "../assets/CloseBtn.webp"
import MenuBtn from "../assets/MenuBTN.webp"

export default function Navbar()  {

  const [isNavOpen, setNavOpen] = React.useState(false)
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  function toggleNavbar(){
    setNavOpen(prevState => ! prevState)
  }

  function toggleNavbarBtn(){
    if (windowWidth < 640){
      setNavOpen(prevState => ! prevState)
    }
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  function windowWid(){
    if (windowWidth > 640){
      setNavOpen(true)
    }
  }

  React.useEffect(() => {
    window.addEventListener("resize", function() {
      setWindowWidth(window.innerWidth)
      windowWid()
    })
    windowWid()
  }, [])

  // function isOverflow(){
  //   isNavOpen ?
  //   document.body.style.overflow="hidden" :
  //   document.body.style.overflow = "unset"
  // }

  return (
    <nav>
      {isNavOpen &&
        <div className="nav-content">

          <div className="nav-logo">
            <Link to="/">
              <img src={AdiLogo} alt="BungAdi-logo" />
            </Link>
            <h2>Adi</h2>
          </div>

          <ul>
            <li onClick={toggleNavbarBtn}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggleNavbarBtn}>
              <Link to="/portpolio">Portpolio</Link>
            </li>
            <li onClick={toggleNavbarBtn}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={toggleNavbarBtn}>
              <Link to="/blog">Blogs</Link>
            </li>
          </ul>

        </div>
      }
      {/* {
        windowWid < 640 &&
        isNavOpen ?
        <div className="hiden">{document.body.style.overflow=`hidden`}</div> :
        <div className="hiden">{document.body.style.overflow =`unset`}</div>
      } */}
      <div className="nav-close-btn">
        {isNavOpen ? 
          <img src={CloseBtn} alt="Nav-Close-Btn" onClick={toggleNavbar}/> : 
          <div className="menu-star" >
            <img src={MenuBtn} alt="Nav-Btn" onClick={toggleNavbar}/>
          </div>
        }
      </div>
    </nav>
  )
}