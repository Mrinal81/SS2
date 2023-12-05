import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTachometerAlt, faBars, faFire, faEnvelope, faGlobe, faGear, faBullhorn, faFile, faToriiGate, faFish, faExternalLink, faChartLine, faCarSide} from '@fortawesome/free-solid-svg-icons'

const list = [
    {
        name: "IMMEDIATE THREATS INTELLIGENCE",
        logo: faFire
    },
    {
        name: "EMAIL GATEWAY",
        logo: faEnvelope,
        
    },
    {
        name: "WEB GATEWAY",
        logo: faToriiGate,
    },
    {
        name: "WEB APPLICATION FIREWALL",
        logo: faGlobe,
    },
    {
        name: "PHISHING AWARNESS",
        logo: faFish,
    },
    {
        name: "ENDPOINT SECURITY",
        logo: faGear,
    },
    {
        name: "LATERAL MOVEMENT",
        logo: faCarSide,
    },
    {
        name: "DATA EXFILTRATION",
        logo: faExternalLink,
    },
    {
        name: "FULL KILL-CHAIN APT",
        logo: faChartLine,
    },
    {
        name: "ACTIVITY CENTER",
        logo: faBullhorn,
    },
    {
        name: "REPORTS",
        logo: faFile,
    },
]


const Sidenav = () => {
    const [showNav, setShowNav]= useState(false);

    const toggleNav = () => {
        setShowNav(!showNav)
    }
  return (
    <div className={`sidenavbar ${showNav ? 'active' : ''}`}>
        <div className="navburger" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} style={{ color: "#eeeff1" }} />
      </div>
        <div className="heading">
            <h3><FontAwesomeIcon icon={faTachometerAlt} />DASHBOARD</h3>
        </div>
        <div className="nav-links">
            <ul>
                {list.map((item, index) => {
                    return(
                        <li key={index}>
                            <div className="icon">
                            <FontAwesomeIcon className='fonticon' icon={item.logo} />
                            </div>
                            <div className="list-icon-title">
                            <span>{item.name}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
        
    </div>
  )
}

export default Sidenav