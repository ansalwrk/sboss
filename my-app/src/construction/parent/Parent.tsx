import React from 'react';
import "./Parent.css";
import "../Cmain.css";
import {  Building2, Sparkles, MoveUpRight } from 'lucide-react';

// Component definition
export default function Parent() {
return (
<><div className='allbg px-55 py-25'>
    <div className='card pl-20 pr-20 pt-20 pb-20'>
        <div className="grid grid-cols-1 place-items-center">
            <p className="cardsm items-center flex flex-cols clmg" style={{ fontSize: "13px", fontWeight: '600' }}>
               <Building2 size={16} style={{ marginRight: "10px" }} />PARENT COMPANY
            </p>

            <h2 className='clwt' style={{ fontSize: "36px", fontWeight: "700", textAlign: "center" }}>
                 Looking for a Dedicated <br className=''/>Tracking & <span className='clmg'>AI Safety Platform</span>?
            </h2>
            <p className='cldull pt-5 grid-cols-1'  style={{ fontSize: "18px", fontWeight: "400", lineHeight: "1.5" }}>
              SBOSS Construction ERP is part of a broader intelligent monitoring ecosystem<br/>developed by our parent company,
              <span className='clwt '>Ethical Intelligent Technologies.</span>
              <br/><br/><p >For organizations requiring a specialized, large-scale tracking, AI safety, and visual intelligence
              <br/>platform beyond ERP scope:</p><br/>
            </p>

            <div className='btn flex gap-4 const1' style={{backgroundColor:"#23d4bb"}}> <Sparkles size={16}/> Explore Advanced AI Safety Solutions <MoveUpRight size={16} />



            </div>
            <p className='cldull pt-10 ' style={{fontSize:"14px"}}>Visit Ethical Intelligent Technologies →</p>
            



        </div>
    </div>
</div></>);}