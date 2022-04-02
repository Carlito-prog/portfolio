import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    
        <nav className="nav-wrp">
          <div className='row'>
            <div className='link-cont col-sm-8 '>
              <div className='link-wrp'>
                <Link to="/"> 
                  <h1>
                    My Story
                  </h1>  
                </Link>
              </div>
            </div>

         
            <div className="col-sm-4 d-flex justify-content-evenly ">
              <div className='d-flex align-items-center'>
                <Link to="/projects"> Projects </Link>
              </div>
        
              <div className='d-flex align-items-center'>
                <Link exact to="/softskills"> Soft Skills </Link>   
              </div>
            </div>
          </div>

        </nav>

    
  )
}

export default Nav