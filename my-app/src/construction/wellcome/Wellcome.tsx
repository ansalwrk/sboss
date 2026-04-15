import React from 'react'
import "./Wellcome.css"
import "../Cmain.css"
import Sboss from "../media/sboss.jpg"
import {Calculator  } from 'lucide-react';



// Component definition
function Wellcome() {
  return (
<><div className='allbg '>

    <div className='grid grid-cols-1 pt-10  pb-10'    style={{textAlign:"center"}}>
        <h2 className='clwt py-5'style={{ fontSize:"36px ",fontWeight:"700 " }}>Welcome to SBOSS Construction ERP</h2>

        <p className='clmg'style={{ fontSize:"20px ",  fontWeight:"600 " }} > One Platform. One Secure Core. Complete Site & Project Visibility. </p>

        <p className='cldull py-5'  style={{ fontSize:" 18px",  fontWeight:"400 ",lineHeight:1.5 }} > 
             SBOSS brings planning, execution, safety, workforce, equipment, and financial control 
            <br /> into a single intelligent workspace — eliminating fragmented software, spreadsheets, and
            <br /> manual reporting.  
        </p>

    </div>

    <div className="grid grid-cols-3 pt-40 pb-20 ">



    <div className='clwt pr-25 justify-self-end py-5'>

      <div className='flex flex-row-reverse ... py-2'><span  className='cardicon  ' ><Calculator size={25} /></span> <span className='fnt mt-5 mr-5 '>Accounting</span> </div>
      <div className='flex flex-row-reverse ... py-2'><span  className='cardicon  ' ><Calculator size={25} /></span> <span className='fnt mt-5 mr-5 '>Procurement</span> </div>
      <div className='flex flex-row-reverse ... py-2'><span  className='cardicon  ' ><Calculator size={25} /></span> <span className='fnt mt-5 mr-5 '>Sales</span> </div>
      <div className='flex flex-row-reverse ... py-2'><span  className='cardicon  ' ><Calculator size={25} /></span> <span className='fnt mt-5 mr-5 '>CRM</span> </div>
      <div className='flex flex-row-reverse ... py-2'><span  className='cardicon  ' ><Calculator size={25} /></span> <span className='fnt mt-5 mr-5 '>Stock</span> </div>
      <div className='flex flex-row-reverse ... py-2'><span  className='cardicon  ' ><Calculator size={25} /></span> <span className='fnt mt-5 mr-5 '>Manufacturing</span> </div>

    </div>

              <div className=''> <img className='sbossimg' src={Sboss} alt="Need illustration" /> </div>

    <div className='clwt pl-25 justify-self-start py-5'>
            <div className='flex py-2 '><span  className='cardicon  ' ><Calculator size={25} /></span> <span className='fnt mt-5 ml-5 '>Projects</span> </div>
            <div className='flex py-2'><span  className='cardicon  ' ><Calculator size={25} /></span> <span className='fnt mt-5 ml-5 '>Assets</span> </div>
            <div className='flex py-2'><span  className='cardicon  ' ><Calculator size={25} /></span> <span className='fnt mt-5 ml-5 '>Point of Sale</span> </div>
            <div className='flex py-2'><span  className='cardicon  ' ><Calculator size={25} /></span> <span className='fnt mt-5 ml-5 '>Quality</span> </div>
            <div className='flex py-2'><span  className='cardicon  ' ><Calculator size={25} /></span> <span className='fnt mt-5 ml-5 '>Support</span> </div>
            <div className='flex py-2'><span  className='cardicon  ' ><Calculator size={25} /></span> <span className='fnt mt-5 ml-5 '>HR & Payroll</span> </div>
    </div>

      










    </div>
    
    
    
    
    
    
    





</div></>
  )
}
export default Wellcome