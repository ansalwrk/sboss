import React from 'react';
import "./Parent.css";
import "../Cmain.css";
import { Building2, Sparkles, MoveUpRight } from 'lucide-react';

// Component definition
export default function Parent() {
  return (
    <>
      {/* Changed px-55 to px-6 on mobile and md:px-55 for laptop */}
      <div className='allbg px-6 md:px-55 py-15 md:py-25'>
        
        {/* Adjusted internal padding for mobile: p-8 vs p-20 */}
        <div className='card p-8 md:p-20'>
          <div className="grid grid-cols-1 place-items-center">
            
            <p className="cardsm items-center flex flex-cols clmg" style={{ fontSize: "13px", fontWeight: '600' }}>
               <Building2 size={16} style={{ marginRight: "10px" }} />PARENT COMPANY
            </p>

            {/* Added clamp for fluid font size and hidden line break on mobile */}
            <h2 className='clwt' style={{ fontSize: "clamp(26px, 5vw, 36px)", fontWeight: "700", textAlign: "center" }}>
               Looking for a Dedicated <br className='hidden md:block'/>Tracking & <span className='clmg'>AI Safety Platform</span>?
            </h2>

            <div className='cldull pt-5 text-center' style={{ fontSize: "18px", fontWeight: "400", lineHeight: "1.5" }}>
              <p>
                SBOSS Construction ERP is part of a broader intelligent monitoring ecosystem
                <br className='hidden md:block'/> developed by our parent company,{' '}
                <span className='clwt'>Ethical Intelligent Technologies.</span>
              </p>
              
              <div className="mt-6">
                <p>For organizations requiring a specialized, large-scale tracking, AI safety, and visual intelligence 
                <br className='hidden md:block'/> platform beyond ERP scope:</p>
              </div>
            </div>

            {/* Button: Adjusted padding and font-size for smaller screens */}
            <div className='btn flex items-center justify-center gap-2 md:gap-4 const1 mt-6' 
                 style={{backgroundColor:"#23d4bb", padding: "12px 20px", borderRadius: "8px", cursor: "pointer"}}> 
              <Sparkles size={16}/> 
              <span className="text-sm md:text-base font-bold">Explore Advanced AI Safety Solutions</span> 
              <MoveUpRight size={16} />
            </div>

            <p className='cldull pt-10' style={{fontSize:"14px"}}>Visit Ethical Intelligent Technologies →</p>
            
          </div>
        </div>
      </div>
    </>
  );
}