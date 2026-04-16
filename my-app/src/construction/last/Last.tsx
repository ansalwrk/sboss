import React from 'react';
import "./Last.css";
import "../Cmain.css";
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

// Component definition
export default function Last() {
  return (
    <>
      <div className='allbg'>
        {/* Changed to flex-col for mobile, flex-row for laptop */}
        <div className='flex flex-col md:flex-row pl-6 md:pl-12 pb-10 pt-10 gap-y-10 md:gap-x-15'>

          {/* About Section */}
          <div className='flex-1 pr-6'>
            <h3 className='clwt py-4' style={{ fontSize: "20px", fontWeight: "700" }}>SBOSS Construction ERP</h3>
            <div className='cldull' style={{ fontSize: "14px", fontWeight: "400", lineHeight: 1.5 }}>
              <p>A self-hosted construction business operating system for<br className='hidden md:block'/>
                 organizations that demand security, compliance, and complete
                <br className='hidden md:block'/> site visibility.<br /><br />A product of
                <span className='clwt' style={{ fontSize: "14px", paddingLeft: "5px", fontWeight: "400" }}>Ethical Intelligent Technologies</span>
                <br />15+ years of global IT and IoT experience
              </p>
            </div>
          </div>

          {/* Locations Section */}
          <div className='flex-[2]'>
            <h4 className='clmg py-4' style={{ fontSize: "13px", fontWeight: "550" }}>OUR LOCATIONS </h4>
            {/* Changed grid-cols-2 to grid-cols-1 on mobile */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              
              <div className='flex flex-col'>
                <div className='clwt flex py-2'>
                  <MapPin size={18} color="#15b797" className="shrink-0" />
                  <div className='pl-2'>
                    <h6 style={{ fontSize: "14px", fontWeight: "500" }}>India</h6>
                    <p className='cldull py-1' style={{ fontSize: "11px", fontWeight: "400" }}>
                      No.813, 6th-floor Nizara Bonanza,<br />
                      Anna Salai, Chennai - 600002</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col'>
                <div className='clwt flex py-2'>
                  <MapPin size={18} color="#15b797" className="shrink-0" />
                  <div className='pl-2'>
                    <h6 style={{ fontSize: "14px", fontWeight: "500" }}>USA</h6>
                    <p className='cldull py-1' style={{ fontSize: "11px", fontWeight: "400" }}>
                      573 Wayland Loop, Livermore,<br /> CA-94550</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col'>
                <div className='clwt flex py-2'>
                  <MapPin size={18} color="#15b797" className="shrink-0" />
                  <div className='pl-2'>
                    <h6 style={{ fontSize: "14px", fontWeight: "500" }}>Saudi Arabia</h6>
                    <p className='cldull py-1' style={{ fontSize: "11px", fontWeight: "400" }}>
                      7356, Alhawwari Street, Almalaz,<br /> Riyadh 12831</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col'>
                <div className='clwt flex py-2'>
                  <MapPin size={18} color="#15b797" className="shrink-0" />
                  <div className='pl-2'>
                    <h6 style={{ fontSize: "14px", fontWeight: "500" }}>Dubai</h6>
                    <p className='cldull py-1' style={{ fontSize: "11px", fontWeight: "400" }}>
                      No:134, Block B, Emirates Building,<br /> Al Qusais, Dubai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className='flex-1'>
            <h4 className='clmg py-4' style={{ fontSize: "13px", fontWeight: "550" }}>CONTACT</h4>
            <div className='flex flex-col gap-2'>
              <div className='clwt flex items-center'>
                <Phone size={18} color="#15b797" className="shrink-0" />
                <h6 className='pl-2' style={{ fontSize: "13px", fontWeight: "500" }}>+91 9500866462</h6>
              </div>
              <div className='clwt flex items-center'>
                <Mail size={18} color="#15b797" className="shrink-0" />
                <h6 className='pl-2' style={{ fontSize: "13px", fontWeight: "500" }}>sales@ethicalintelligent.com</h6>
              </div>
              <div className='clwt flex items-center'>
                <Clock size={18} color="#15b797" className="shrink-0" />
                <h6 className='pl-2' style={{ fontSize: "13px", fontWeight: "500" }}>Mon–Fri: 9 AM – 6 PM</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='cldull border-t border-gray-800 flex flex-col md:flex-row justify-between pt-10 px-6 md:px-10 pb-10 gap-4' style={{ fontSize: "12px", fontWeight: "400" }}>
          <p>© 2025 Ethical Intelligent Technologies. All rights reserved.</p>
          <p className='flex gap-4 md:pr-10'>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </p>
        </div>
      </div>
    </>
  );
}