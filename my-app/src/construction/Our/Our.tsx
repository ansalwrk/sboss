
import React from 'react'
import "./Our.css"
import "../Cmain.css"

// Component definition
function Our() {
  return (
<> 
<div className='allbg'>
<div className='hv grid grid-cols-2 gap-x-5 px-10 pb-30 '>

    <div className='hv 'style={{textAlign:"left"}}>  

        <p className='clmg ' style={{fontSize:"16px", fontWeight:"600"}}>OUR PROCESS</p>
   
        <h2 className='clwt' style={{fontSize:"36px", fontWeight:"700"}}>Are You Truly in Control of
            <br /> Your <span className='clmg'>Construction Projects?</span>
        </h2>
        <p className='cldull mt-4 mb-4' style={{fontSize:"18px", fontWeight:"400"}}>In today's cloud-heavy construction environment, convenience often
            <br />comes at the cost of control. Consider these critical questions about your 
            <br />current operations.
        </p> 
        <span className='clwt ' style={{fontSize:"16px", fontWeight:"600"}}>SBOSS Construction ERP puts control back where it belongs — with project
            <br />owners, EPCs, and contractors. 
        </span>
    </div>
<div className='grid-cols-1 pr-5 '>

    <div className='card'>

        <div className='flex justify-between ...'    > 
   
            <h3 className='' style={{fontSize:"22px", fontWeight:"700"}}>Data Ownership</h3>
            <span className='clmg ' style={{ fontFamily:"JetBrains,Mono,monospace", fontSize:"18px", fontWeight:"600"}}>01</span>
        </div>

            <p className='cldull pt-3' style={{textAlign:"left"}}>Do you know exactly where your project data lives — drawings,
                <br /> BOQs, contracts, bills, attendance records, and site footage?</p>
        </div>


        <div className='card pt-8 pl-10 pr-10 pb-10'>
            <div className='flex justify-between ...'    > 
                <h3 className='' style={{fontSize:"22px", fontWeight:"700"}}>Workflow Fragmentation</h3>
                <span className='clmg ' style={{ fontFamily:"JetBrains,Mono,monospace", fontSize:"18px", fontWeight:"600"}}>02</span>
            </div>
            <p className='cldull pt-3' style={{textAlign:"left"}}>Are your project workflows, safety data, and progress reports        
            <br /> spread across disconnected tools?</p>
        </div>

     
        <div className='card pt-8 pl-10 pr-10 '>
            <div className='flex justify-between ...'    > 
   
                <h3 className='' style={{fontSize:"22px", fontWeight:"700"}}>Real-Time Visibility</h3>
                <span className='clmg ' style={{ fontFamily:"JetBrains,Mono,monospace", fontSize:"18px", fontWeight:"600"}}>03</span>
            </div>
                <p className='cldull pt-3' style={{textAlign:"left"}}>Do you have real-time visibility into manpower, materials,       
                <br /> equipment, and costs — or only after delays occur?</p>
        </div>
     

        <div className='card pt-8 pl-10 pr-10 '>
            <div className='flex justify-between ...'    > 
   
                <h3 className='' style={{fontSize:"22px", fontWeight:"700"}}>Infrastructure Control</h3>
                <span className='clmg ' style={{ fontFamily:"JetBrains,Mono,monospace", fontSize:"18px", fontWeight:"600"}}>04</span>
            </div>
                <p className='cldull pt-3' style={{textAlign:"left"}}>Are your site cameras, sensors, and operational data fully owned by
                <br /> you — or hosted on third-party platforms? </p>
            </div>
     
    </div>
    


</div></div></>
  )
}

export default Our


