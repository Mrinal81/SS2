import {useState} from 'react'
import Brand from "../assets/brand-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe,faAngleDown, faBell, faCloud, faCaretRight, faBars} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [showMedia, setShowMedia]= useState(false);

    const submit = () => {
        setShowMedia(!showMedia)
    }
  return (
    <>
    <nav className='main-nav'>
        {/* 1ST Logo Part */}
        <div className="logo1">
            <img src={Brand} alt="brand-logo" className='brand-logo' />
            <h3 className='sub-logo'>
            <FontAwesomeIcon icon={faGlobe} style={{color: "#efeff1"}}/> Cymulate Demo <span><FontAwesomeIcon icon={faCaretRight} /></span>
            </h3>
        </div>
        <div className="hamburger-menu">
                    <a href="#" onClick={submit}>
                        <FontAwesomeIcon icon={faBars} style={{color: "#eeeff1",}} />
                    </a>
                </div>
        {/* 2ND Logo */}
        <div className={ showMedia ? "logo2 mobile-logo2" : "logo2"}>
            <p><FontAwesomeIcon icon={faCloud} style={{color: "#eaeaec"}} /></p>
            <p>Agents <span><FontAwesomeIcon icon={faAngleDown} /></span></p>
            <p><span><FontAwesomeIcon icon={faBell} style={{color: "#f3f6fb"}}/></span></p>
            <p className='drop'>Hello Demo 
                <span><FontAwesomeIcon icon={faAngleDown} style={{color: "#f3f6fb"}}/></span></p>


        </div>
                
    </nav>
    </>
  )
}

export default Header