import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFire, faBars ,faEnvelope, faGlobe, faGear, faFile, faToriiGate, faExternalLink, faChartLine, faCarSide} from '@fortawesome/free-solid-svg-icons'

const data=[
  {
    logo:faGear,
    title1:"VECTOR:",
    title2:"TARGET:",
    title3:"TIME:",
    value1:"ENDPOINT SECURITY",
    value2:"DESKTOP-7638JAD",
    value3:"4/14/22020 18:57:05",
    icon:faEnvelope,
    color: "linear-gradient(90deg, rgba(3,2,7,1) 0%, rgba(55,56,63,1) 38%, rgba(35,168,249,1) 100%)",
  },
  {
    logo:faToriiGate,
    title1:"VECTOR:",
    title2:"TARGET:",
    title3:"TIME:",
    value1:"WEB GATEWAY",
    value2:"DESKTOP-7638JAD",
    value3:"4/14/22020 18:57:05",
    icon:faEnvelope,
    color: "linear-gradient(90deg, rgba(3,2,7,1) 0%, rgba(55,56,63,1) 38%, rgba(221,83,220,1) 100%)",
  },
  {
    logo:faFire,
    title1:"VECTOR:",
    title2:"TARGET:",
    title3:"TIME:",
    value1:"IMMEDIATE THREAT",
    value2:"CYMSRV2012",
    value3:"4/14/22020 18:57:05",
    icon:faEnvelope,
    color: "linear-gradient(90deg, rgba(3,2,7,1) 0%, rgba(55,56,63,1) 38%, rgba(222,108,44,1) 100%)",
  },
  {
    logo:faCarSide,
    title1:"VECTOR:",
    title2:"TARGET:",
    title3:"TIME:",
    value1:"LATERAL MOVEMENT",
    value2:"CYMSRV2020",
    value3:"4/14/22020 18:57:05",
    icon:faEnvelope,
    color: "linear-gradient(90deg, rgba(3,2,7,1) 0%, rgba(55,56,63,1) 38%, rgba(51,181,100,1) 100%)",
  },
  {
    logo:faChartLine,
    title1:"VECTOR:",
    title2:"TARGET:",
    title3:"TIME:",
    value1:"FULL KIT-CHAIN",
    value2:"ABC345672002",
    value3:"4/14/22020 18:57:05",
    icon:faEnvelope,
    color: "linear-gradient(90deg, rgba(3,2,7,1) 0%, rgba(55,56,63,1) 38%, rgba(209,107,62,1) 100%)",
  },
  {
    logo:faGlobe,
    title1:"VECTOR:",
    title2:"TARGET:",
    title3:"TIME:",
    value1:"WEB APPLICATION",
    value2:"DESKTOP-7638JAD",
    value3:"4/14/22020 18:57:05",
    icon:faEnvelope,
    color: "linear-gradient(90deg, rgba(3,2,7,1) 0%, rgba(55,56,63,1) 38%, rgba(111,65,185,1) 100%)",
  },
  {
    logo:faFile,
    title1:"VECTOR:",
    title2:"TARGET:",
    title3:"TIME:",
    value1:"EMAIL GATEWAY",
    value2:"DESKTOP-7638JAD",
    value3:"4/14/22020 18:57:05",
    icon:faEnvelope,
    color: "linear-gradient(90deg, rgba(3,2,7,1) 0%, rgba(55,56,63,1) 38%, rgba(253,208,46,1) 100%)",
  },
  {
    logo:faExternalLink,
    title1:"VECTOR:",
    title2:"TARGET:",
    title3:"TIME:",
    value1:"DATA EXTRACTION",
    value2:"DESKTOP-7638JAD",
    value3:"4/14/22020 18:57:05",
    icon:faEnvelope,
    color: "linear-gradient(90deg, rgba(3,2,7,1) 0%, rgba(55,56,63,1) 38%, rgba(169,238,235,1) 100%)",
  },
  {
    logo:faExternalLink,
    title1:"VECTOR:",
    title2:"TARGET:",
    title3:"TIME:",
    value1:"DATA EXTRACTION",
    value2:"DESKTOP-7638JAD",
    value3:"4/14/22020 18:57:05",
    icon:faEnvelope,
    color: "linear-gradient(90deg, rgba(3,2,7,1) 0%, rgba(55,56,63,1) 38%, rgba(255,182,255,1) 100%)",
  },
  {
    logo:faExternalLink,
    title1:"VECTOR:",
    title2:"TARGET:",
    title3:"TIME:",
    value1:"DATA EXTRACTION",
    value2:"DESKTOP-7638JAD",
    value3:"4/14/22020 18:57:05",
    icon:faEnvelope,
    color: "linear-gradient(90deg, rgba(3,2,7,1) 0%, rgba(55,56,63,1) 38%, rgba(27,100,196,1) 100%)",
  },
]

const RightSideNav = () => {
  const [showRightNav, setShowRightNav]= useState(false);

    const toggleNav = () => {
        setShowRightNav(!showRightNav)
    }
  return (
    <div className={`rightnavbar ${showRightNav ? 'active' : ''}`}>
      <div className="rightnavburger" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} style={{ color: "#eeeff1" }} />
      </div>
      <div className="righticoncontent">
      <div className="headingright">
        <div className="leftheading">
          <h4>ALERTS</h4>
        </div>
        <div className="rightheading">
          <h4>ATTACK TRACE</h4>
        </div>
      </div>
      <div className="details">
        <ul>
        {data.map((item,index) => {
          return(
            <>
              <li key={index}>
                  <div className='itemlogo'>
                    <FontAwesomeIcon icon={item.logo} />
                  </div>
                  <div className='itemtitle'>
                    <p>{item.title1}</p>
                    <p>{item.title2}</p>
                    <p>{item.title3}</p>
                  </div>
                  <div className='itemvalue'>
                    <p className='value1'>{item.value1}</p>
                    <p>{item.value2}</p>
                    <p>{item.value3}</p>
                  </div>
                  <div className='itemicon'>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
              </li>
              <div className="line">
              <p className='innerline' style={{background:item.color}}></p>
              </div>
              </>
          )
        })}
        </ul>
      </div>
      </div>
    </div>
  )
}

export default RightSideNav