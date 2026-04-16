import React from 'react'
import "./Wellcome.css"
import "../Cmain.css"
import Sboss from "../media/sboss.jpg"
import { Calculator } from 'lucide-react';

function Wellcome() {
  return (
    <>
      <div className='allbg px-6 md:px-0'>
        {/* Header Section */}
        <div className='grid grid-cols-1 pt-10 pb-10' style={{ textAlign: "center" }}>
          <h2 className='clwt py-5' style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: "700" }}>
            Welcome to SBOSS Construction ERP
          </h2>

          <p className='clmg' style={{ fontSize: "20px", fontWeight: "600" }}>
            One Platform. One Secure Core. Complete Site & Project Visibility.
          </p>

          <p className='cldull py-5' style={{ fontSize: "18px", fontWeight: "400", lineHeight: 1.5 }}>
            SBOSS brings planning, execution, safety, workforce, equipment, and financial control
            <br className="hidden md:block" /> into a single intelligent workspace — eliminating fragmented software, spreadsheets, and
            <br className="hidden md:block" /> manual reporting.
          </p>
        </div>

        {/* Features Section: Changed grid-cols-3 to grid-cols-1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 pt-10 md:pt-40 pb-20 items-center">

          {/* Left Column (appears first on laptop, second on mobile order-2) */}
          <div className='clwt md:pr-25 justify-self-center md:justify-self-end py-5 order-2 md:order-1'>
            <div className='flex flex-row-reverse py-2'><span className='cardicon'><Calculator size={25} /></span> <span className='fnt mt-5 mr-5'>Accounting</span> </div>
            <div className='flex flex-row-reverse py-2'><span className='cardicon'><Calculator size={25} /></span> <span className='fnt mt-5 mr-5'>Procurement</span> </div>
            <div className='flex flex-row-reverse py-2'><span className='cardicon'><Calculator size={25} /></span> <span className='fnt mt-5 mr-5'>Sales</span> </div>
            <div className='flex flex-row-reverse py-2'><span className='cardicon'><Calculator size={25} /></span> <span className='fnt mt-5 mr-5'>CRM</span> </div>
            <div className='flex flex-row-reverse py-2'><span className='cardicon'><Calculator size={25} /></span> <span className='fnt mt-5 mr-5'>Stock</span> </div>
            <div className='flex flex-row-reverse py-2'><span className='cardicon'><Calculator size={25} /></span> <span className='fnt mt-5 mr-5'>Manufacturing</span> </div>
          </div>

          {/* Center Image (appears top on mobile order-1) */}
          <div className='flex justify-center order-1 md:order-2'> 
            <img className='sbossimg max-w-[80%] md:max-w-full' src={Sboss} alt="SBOSS Core" /> 
          </div>

          {/* Right Column (appears third on both order-3) */}
          <div className='clwt md:pl-25 justify-self-center md:justify-self-start py-5 order-3'>
            <div className='flex py-2 '><span className='cardicon'><Calculator size={25} /></span> <span className='fnt mt-5 ml-5'>Projects</span> </div>
            <div className='flex py-2'><span className='cardicon'><Calculator size={25} /></span> <span className='fnt mt-5 ml-5'>Assets</span> </div>
            <div className='flex py-2'><span className='cardicon'><Calculator size={25} /></span> <span className='fnt mt-5 ml-5'>Point of Sale</span> </div>
            <div className='flex py-2'><span className='cardicon'><Calculator size={25} /></span> <span className='fnt mt-5 ml-5'>Quality</span> </div>
            <div className='flex py-2'><span className='cardicon'><Calculator size={25} /></span> <span className='fnt mt-5 ml-5'>Support</span> </div>
            <div className='flex py-2'><span className='cardicon'><Calculator size={25} /></span> <span className='fnt mt-5 ml-5'>HR & Payroll</span> </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Wellcome



