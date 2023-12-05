import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTachometerAlt ,faFire, faEnvelope, faGlobe, faGear, faBullhorn, faFile, faToriiGate, faFish, faExternalLink, faChartLine, faCarSide} from '@fortawesome/free-solid-svg-icons'

const MiddleContent = () => {
  return (
    <div className="circle-div-content">
    <div className='middle-content-circles'>
      <div className="middlecircle8"></div>
      <div className="middlecircle7"></div>
      <div className="middlecircle6">
        <div className="middlecircle6innercircle5">
        <div className="c1-content-circle2">
        <FontAwesomeIcon icon={faEnvelope} />
          <div className="head">
            <span className='first'>96</span> 
            <span className='sec'>/100</span>
            </div>
            <p>EMAIL GATEWAY</p>
        </div>
        </div>
        <div className="middlecircle6innercircle6">
        <div className="c1-content-circle2">
        <FontAwesomeIcon icon={faToriiGate} />
          <div className="head">
            <span className='first'>67</span> 
            <span className='sec'>/100</span>
            </div>
            <p>WEB GATEWAY</p>
        </div>
        </div>
        <div className="middlecircle6innercircle7">
        <div className="c1-content-circle2">
        <FontAwesomeIcon icon={faGlobe} />
          <div className="head">
            <span className='first'>63</span> 
            <span className='sec'>/100</span>
            </div>
            <p>WEB FIREWALL</p>
        </div>
        </div>
      </div>
      <div className="middlecircle5"></div>
      <div className='middlecircle4'>
      <div className='middlecircle4innercircle3'>
      <div className="c1-content-circle2">
      <FontAwesomeIcon icon={faFish} />
          <div className="head">
            <span className='first'>49</span> 
            <span className='sec'>/100</span>
            </div>
            <p>FISHING AWARNESS</p>
        </div>
      </div>
        <div className='middlecircle4innercircle4'>
        <div className="c1-content-circle2">
        <FontAwesomeIcon icon={faGear} />
          <div className="head">
            <span className='first'>34</span> 
            <span className='sec'>/100</span>
            </div>
            <p>ENDPOINT SECURITY</p>
        </div>
        </div>
      </div>
      <div className='middlecircle3'></div>
      <div className='middlecircle2'>
        <div className='middlecircle2innercircle1'>
        <div className="c1-content-circle2">
        <FontAwesomeIcon icon={faCarSide} />
          <div className="head">
            <span className='first'>76</span> 
            <span className='sec'>/100</span>
            </div>
            <p>LATERAL MOVEMENT</p>
        </div>
        </div>
        <div className='middlecircle2innercircle2'>
        <div className="c1-content-circle2">
          <FontAwesomeIcon icon={faExternalLink} />
          <div className="head">
            <span className='first'>76</span> 
            <span className='sec'>/100</span>
            </div>
            <p>DATA EXALTRATION</p>
        </div>
        </div>
      </div>
      <div className='middlecircle1'>
        <div className="c1-content">
          <div className="head">
            <span className='first'>68</span> 
            <span className='sec'>/100</span>
            </div>
        <hr />
        <div className="bottom">
        <p>OVERALL SCORE</p>
        <h4>CYMULATE DEMO</h4>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MiddleContent