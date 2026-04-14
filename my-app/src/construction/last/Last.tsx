import React from 'react';
import "./Last.css";
import "../Cmain.css";
import {  } from 'lucide-react';

// Component definition
export default function Last() {
return (
<>
<div className='allbg'>
    <div className='grid grid-cols-3 px-30 pb-40'>


        <div>
            <h3 className='clwt' style={{fontSize:"20px" , fontWeight:"700"}}>SBOSS Construction ERP</h3>

            <p className='cldull' style={{fontSize:"14px" , fontWeight:"400"}}>A self-hosted construction business operating system for
                <br/>organizations that demand security, compliance, and complete
                <br/>site visibility.<br/><br/>A product of
                
                <span className='clwt' style={{fontSize:"14px" , fontWeight:"400"}}>Ethical Intelligent Technologies</span><br/>15+ years of global IT and IoT experience
            </p>

        </div>

         <div>
            <h4> Our Locations </h4>
            <div className='grid grid-cols-2'>
            
                <p>India</p>
                <p>No.813, 6th-floor Nizara Bonanza,<br/> Anna Salai, Chennai - 600002</p>

                <p>Saudi Arabia </p>
                <p>7356, Alhawwari Street, Almalaz,<br/> Riyadh 12831</p>
            </div>
        

            <div>
                <p>USA</p>
                <p>573 Wayland Loop, Livermore,<br/> CA-94550</p>

                <p>Dubai</p>
                <p>No:134, Block B, Emirates Building,<br/> Al Qusais, Dubai</p>
            </div>
        </div>

            <div>
                <h4>Contact</h4>
                <p>+91 9500866462</p>
                <p>sales@ethicalintelligent.com</p>
                <p>Mon–Fri: 9 AM – 6 PM (GST)</p>
            </div>
    </div>

</div>
</>);}