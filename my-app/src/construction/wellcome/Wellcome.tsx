import React from 'react'
import "./Wellcome.css"
import "../Cmain.css"
import Sboss from "../media/sboss.jpg"
import {Calculator  } from 'lucide-react';



// Component definition
function Wellcome() {
  return (
<><div className='allbg '>

    <div className='grid grid-cols-1 pt-60  pb-20'    style={{textAlign:"center"}}>
        <h2 className='clwt'style={{ fontSize:"36px ",fontWeight:"700 " }}>Welcome to SBOSS Construction ERP</h2>

        <p className='clmg'style={{ fontSize:"20px ",  fontWeight:"600 " }} > One Platform. One Secure Core. Complete Site & Project Visibility. </p>

        <p className='cldull pt-4'  style={{ fontSize:" 18px",  fontWeight:"400 " }} > 
             SBOSS brings planning, execution, safety, workforce, equipment, and financial control 
            <br /> into a single intelligent workspace — eliminating fragmented software, spreadsheets, and
            <br /> manual reporting.  
        </p>

    </div>

    <div className="grid grid-cols-3 pt-50 pb-60 ">



    <div className='clwt pr-10 justify-self-end'>

      <div className='flex'><span className='fnt'>Accounting</span> <Calculator size={30} className='sicon'  /></div>
      <div>Procurement</div>
      <div>Sales</div>
      <div>CRM</div>
      <div>Stock</div>
      <div>Manufacturing</div>
    </div>



        
      
        
        
        


              <div> <img className='needimg' src={Sboss} alt="Need illustration" /> </div>

    <div className='clwt pl-10'>
      <div className='flex flex-cols-1'>Projects</div>
      <div>Assets</div>
      <div>Point of Sale</div>
      <div>Quality</div>
      <div>Support</div>
      <div>HR & Payroll</div>
    </div>

      










    </div>
    
    
    
    
    
    
    





</div></>
  )
}
export default Wellcome