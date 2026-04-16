import React from 'react'
import "./Ourprocess.css"
import "../Cmain.css"

function Ourprocess() {
  return (
    <> 
      <div className='allbg'>
        {/* Changed grid-cols-2 to grid-cols-1, and md:grid-cols-2 for laptop. Adjusted padding for mobile. */}
        <div className='hv grid grid-cols-1 md:grid-cols-2 px-6 md:px-15 gap-y-10 md:gap-x-5 pb-20 md:pb-30 pt-10'>

          <div className='hv' style={{ textAlign: "left" }}>  
            <p className='clmg' style={{ fontSize: "16px", fontWeight: "600" }}>OUR PROCESS</p>
       
            <h2 className='clwt' style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: "700", lineHeight: "1.2" }}>
              Are You Truly in Control of
              <br className="hidden md:block" /> Your <span className='clmg'>Construction Projects?</span>
            </h2>

            <p className='cldull mt-4 mb-4' style={{ fontSize: "18px", fontWeight: "400" }}>
              In today's cloud-heavy construction environment, convenience often
              <br className="hidden md:block" /> comes at the cost of control. Consider these critical questions about your 
              <br className="hidden md:block" /> current operations.
            </p> 

            <span className='clwt' style={{ fontSize: "16px", fontWeight: "600" }}>
              SBOSS Construction ERP puts control back where it belongs — with project
              <br className="hidden md:block" /> owners, EPCs, and contractors. 
            </span>
          </div>

          {/* Cards Container: Adjusted padding for mobile */}
          <div className='grid-cols-1 md:pr-5 flex flex-col gap-y-6'>

            <div className='card p-6 md:p-10'>
              <div className='flex justify-between items-center'> 
                <h3 style={{ fontSize: "22px", fontWeight: "700" }}>Data Ownership</h3>
                <span className='clmg' style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "18px", fontWeight: "600" }}>01</span>
              </div>
              <p className='cldull pt-3' style={{ textAlign: "left" }}>
                Do you know exactly where your project data lives — drawings,
                BOQs, contracts, bills, attendance records, and site footage?
              </p>
            </div>

            <div className='card p-6 md:p-10'>
              <div className='flex justify-between items-center'> 
                <h3 style={{ fontSize: "22px", fontWeight: "700" }}>Workflow Fragmentation</h3>
                <span className='clmg' style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "18px", fontWeight: "600" }}>02</span>
              </div>
              <p className='cldull pt-3' style={{ textAlign: "left" }}>
                Are your project workflows, safety data, and progress reports spread across disconnected tools?
              </p>
            </div>

            <div className='card p-6 md:p-10'>
              <div className='flex justify-between items-center'> 
                <h3 style={{ fontSize: "22px", fontWeight: "700" }}>Real-Time Visibility</h3>
                <span className='clmg' style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "18px", fontWeight: "600" }}>03</span>
              </div>
              <p className='cldull pt-3' style={{ textAlign: "left" }}>
                Do you have real-time visibility into manpower, materials, equipment, and costs — or only after delays occur?
              </p>
            </div>

            <div className='card p-6 md:p-10'>
              <div className='flex justify-between items-center'> 
                <h3 style={{ fontSize: "22px", fontWeight: "700" }}>Infrastructure Control</h3>
                <span className='clmg' style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "18px", fontWeight: "600" }}>04</span>
              </div>
              <p className='cldull pt-3' style={{ textAlign: "left" }}>
                Are your site cameras, sensors, and operational data fully owned by you — or hosted on third-party platforms?
              </p>
            </div>
             
          </div>
        </div>
      </div>
    </>
  )
}

export default Ourprocess


