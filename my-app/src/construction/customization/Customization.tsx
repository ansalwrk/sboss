import React from 'react';
import "./Customization.css";
import "../Cmain.css";
import { Shield, Users, Truck, MapPin, ShieldAlert, Camera, TriangleAlert, Eye, Building2, Sparkles, MoveUpRight, Dot } from 'lucide-react';

// Component definition
export default function Customization() {
  return (
    <>
      <div className='allbg pb-20 md:pb-40'>
        {/* Header Section */}
        <div className='grid grid-cols-1 py-10 md:py-20 px-6' style={{ textAlign: "center" }}>
          <h2 className='clwt' style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: "700" }}>
            Customization & Deployment
          </h2>

          <p className='clmg pt-4' style={{ fontSize: "18px", fontWeight: "600" }}>
            Built Around How Your Projects Actually Run
          </p>

          <p className='cldull pt-4 pb-5' style={{ fontSize: "18px", fontWeight: "400" }}>
            SBOSS Construction ERP is designed to adapt — not force change.
          </p>
        </div>

        {/* Cards Container: Stacks on mobile, side-by-side on laptop */}
        <div className='flex flex-col md:flex-row gap-5 px-6 md:px-40'>

          {/* Card 1 */}
          <div className='card flex-1' style={{ textAlign: "left", lineHeight: "1.5" }}>
            <h3 className='clmg flex mb-5' style={{ fontSize: "20px", fontWeight: "600" }}> 
              Customization 
            </h3>
            <div className="cldull" style={{ fontSize: "14px", fontWeight: "400" }}>
              <ul>
                <li className='flex items-start py-2'>
                  <Dot className="shrink-0" size={35} color="#15c19f" /> 
                  <span>Custom workflows and approval hierarchies</span>
                </li>
                <li className='flex items-start mt-2'>
                  <Dot className="shrink-0" size={35} color="#15c19f" /> 
                  <span>Project-specific data fields and reports</span>
                </li>
                <li className='flex items-start py-1'>
                  <Dot className="shrink-0" size={35} color="#15c19f" /> 
                  <span>Role-based dashboards for owners, <br className="hidden md:block"/>PMs, engineers, and safety teams</span>
                </li>
                <li className='flex items-start py-1'>
                  <Dot className="shrink-0" size={35} color="#15c19f" /> 
                  <span>Configurable rules, alerts, and escalations</span>
                </li>
                <li className='flex items-start py-1'>
                  <Dot className="shrink-0" size={35} color="#15c19f" /> 
                  <span>Localization for regional labor, tax, <br className="hidden md:block"/>and compliance regulations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className='card flex-1' style={{ textAlign: "left", lineHeight: "1.5" }}>
            <h3 className='clmg flex mb-5' style={{ fontSize: "20px", fontWeight: "600" }}> 
              Deployment 
            </h3>
            <ul className="cldull" style={{ fontSize: "14px", fontWeight: "400" }}>
              <li className='flex items-start py-1'>
                <Dot className="blink shrink-0" size={40} color="#15c19f" />
                <span>Fully on-premises deployment</span>
              </li>
              <li className='flex items-start py-1'>
                <Dot className="shrink-0" size={35} color="#15c19f" /> 
                <span>Private cloud (single-tenant)</span>
              </li>
              <li className='flex items-start py-1'>
                <Dot className="shrink-0" size={35} color="#15c19f" /> 
                <span>High availability and disaster recovery setups</span>
              </li>
              <li className='flex items-start py-1'>
                <Dot className="shrink-0" size={35} color="#15c19f" /> 
                <span>Offline-first site operations with sync support</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className='card flex-1' style={{ textAlign: "left", lineHeight: "1.5" }}>
            <h3 className='clmg flex mb-5' style={{ fontSize: "20px", fontWeight: "600" }}> 
              Integration 
            </h3>
            <ul className="cldull" style={{ fontSize: "14px", fontWeight: "400" }}>
              <li className='flex items-start py-1'>
                <Dot className="shrink-0" size={35} color="#15c19f" /> 
                <span>Works with existing biometrics, CCTV, <br className="hidden md:block"/> GPS, and IoT devices</span>
              </li>
              <li className='flex items-start py-1'>
                <Dot className="shrink-0" size={35} color="#15c19f" /> 
                <span>Open APIs for legacy systems and external tools</span>
              </li>
              <li className='flex items-start py-1'>
                <Dot className="shrink-0" size={35} color="#15c19f" /> 
                <span>Custom reports for clients, consultants, and authorities</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}