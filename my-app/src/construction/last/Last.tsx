import React from 'react';
import "./Last.css";
import "../Cmain.css";
import { MapPin,Phone,Clock,Mail, AlignLeft  } from 'lucide-react';

// Component definition
export default function Last() {
return (
<>
<div className='allbg '>
    <div className=' allbg grid grid-cols-3 pl-12 pb-10 pt-10 gap-x-15 '>


        <div>
            <h3 className='clwt py-4' style={{fontSize:"20px" , fontWeight:"700"}}>SBOSS Construction ERP</h3>

            <div className='cldull ' style={{fontSize:"14px" , fontWeight:"400", lineHeight:1.5}}>
                <p>A self-hosted construction business operating system for<br/>
                <span className=''>organizations that demand security, compliance, and complete</span>
                <br/>site visibility.<br/><br/>A product of
                
                <span className='clwt' style={{fontSize:"14px" ,paddingLeft:"5px", fontWeight:"400"}}>Ethical Intelligent Technologies</span><br/>15+ years of global IT and IoT experience
                </p>
            </div>

        </div>



        <div>
            <h4 className='clmg py-4' style={{fontSize:"13px" ,fontWeight:"550"}}>OUR LOCATIONS </h4>
            <div className='grid grid-cols-2 '>
                
                <div className='flex flex-col '>
                    <div className='clwt flex grid-cols-2 py-2'> 
                        <MapPin size={18} color="#15b797" />
                        <h6 className='pl-2' style={{fontSize:"14px", fontWeight:"500"}}>
                            India
                          <p className='cldull py-2' style={{fontSize:"11px", fontWeight:"400"}}>
                            No.813, 6th-floor Nizara Bonanza,<br/>
                            Anna Salai, Chennai - 600002</p>
                         </h6>
                     </div>
                </div>

                <div className='flex flex-col '>
                    <div className='clwt flex grid-cols-2 py-2'> 
                        <MapPin size={18} color="#15b797" />
                        <h6 className='pl-2' style={{fontSize:"14px", fontWeight:"500"}}>
                            USA
                          <p className='cldull py-2' style={{fontSize:"11px", fontWeight:"400"}}>
                           573 Wayland Loop, Livermore,<br/> CA-94550</p>
                         </h6>
                     </div>
                </div>
                
                <div className='flex flex-col '>
                    <div className='clwt flex grid-cols-2 py-2'> 
                        <MapPin size={18} color="#15b797" />
                        <h6 className='pl-2' style={{fontSize:"14px", fontWeight:"500"}}>
                            Saudi Arabia
                          <p className='cldull py-2' style={{fontSize:"11px", fontWeight:"400"}}>
                           7356, Alhawwari Street, Almalaz,<br/> Riyadh 12831</p>
                         </h6>
                     </div>
                </div>
                
                <div className='flex flex-col '>
                    <div className='clwt flex grid-cols-2 py-2'> 
                        <MapPin size={18} color="#15b797" />
                        <h6 className='pl-2' style={{fontSize:"14px", fontWeight:"500"}}>
                            Dubai
                          <p className='cldull py-2' style={{fontSize:"11px", fontWeight:"400"}}>
                           No:134, Block B, Emirates Building,<br/> Al Qusais, Dubai</p>
                         </h6>
                     </div>
                </div>
            </div>
        </div>
        <div>

            <h4 className='clmg py-4' style={{fontSize:"13px" ,fontWeight:"550"}}>CONTACT</h4>
              <div className='flex flex-col '>  <div className='clwt flex grid-cols-2 py-2'> 
                      <Phone size={18} color="#15b797" />
                        <h6 className='pl-2' style={{fontSize:"13px", fontWeight:"500"}}>
                            +91 9500866462</h6></div></div>

                <div className='flex flex-col '> <div className='clwt flex grid-cols-2 py-2'> 
                        <Mail       size={18} color="#15b797" /> <h6 className='pl-2' style={{fontSize:"13px", fontWeight:"500"}}>
                        sales@ethicalintelligent.com </h6> </div> </div>

                <div className='flex flex-col '> <div className='clwt flex grid-cols-2 py-2'> 
                        <Clock       size={18} color="#15b797" /> <h6 className='pl-2' style={{fontSize:"13px", fontWeight:"500"}}>
                        Mon–Fri: 9 AM – 6 PM  </h6> </div> </div>
            </div>
    </div>
    <div className='cldull grid grid-cols-2 pt-10 pl-10 pb-10 pr-10' style={{fontSize:"12px" , fontWeight:"400"}}> 
    <p >© 2025 Ethical Intelligent Technologies. All rights reserved.</p>
    <p style={{textAlign:"right",paddingRight:"10px" }}>Privacy Policy
    <span>Terms of Service</span></p>
    
    </div>
</div>
</>);}