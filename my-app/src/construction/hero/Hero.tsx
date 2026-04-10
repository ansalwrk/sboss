
import React from 'react'
import "./Hero.css"
import "../Cmain.css"

// Component definition
function Hero() {
  return (
<><div className='allbg pt-32 pl-12'>


    <div className="flex flex-col clwt" style={{ fontSize: "57px", fontWeight: "700", lineHeight: "1.0" }}>
        <div>Your Self-Hosted</div>
        <div>Construction ERP with <span className='clmg'>AI</span></div>
        <div>Vision <span className='clmg'>&</span> Site Intelligence</div>
    </div>


    <div className='cldull' style={{ fontSize: "20px", fontWeight: "500", lineHeight: "1.5", marginTop: "20px" }}>
        <p>SBOSS Construction ERP is a self-hosted Business Operating Smart System purpose-</p>
        <p>built for construction and infrastructure projects. It unifies project ERP, site operations,</p>
        <p>workforce management, AI computer vision, tracking, and analytics into a single on-</p>
        <p>premises or private cloud platform — ensuring complete control over your project</p>
        <p>data, site intelligence, and trade secrets.</p>
    </div>

    <div className='flex flex-row clwt gap-8 items-center'> 

        <div className="card cardthree">Data Sovereignty</div>               <span>|</span>
        <div className="card cardthree">On-Premises / Private Cloud</div>    <span>|</span>
        <div className="card cardthree">Privacy-First AI</div>
    </div>

    <div className="grid grid-cols-3 pt-4 ">
        <div className="grid grid-cols-2 gap-4 pb-50">
        <div className="btn "      style={{ background: "#22d3b8"}}       >Request a Demo</div>
        <div className="btn"               >Explore Platform</div>
    </div>
    </div>



    




















</div></>
  )
}

export default Hero