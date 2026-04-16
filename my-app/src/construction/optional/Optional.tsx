import React from 'react'
import "./Optional.css"
import "../Cmain.css"
import { Radar, Users, Truck, MapPin, ShieldAlert, Camera, TriangleAlert, Eye } from 'lucide-react';

// Component definition
function Optional() {                                                                     
  return (
    <>
      <div className='allbg pb-20 md:pb-50 pt-10 px-6 md:px-0'>

        {/* Header Section */}
        <div className="grid grid-cols-1 place-items-center pb-10">   
          <p className="cardsm items-center flex flex-cols clmg" style={{fontSize:"13px", fontWeight:'600'}}>
            <Radar size={16} style={{marginRight:"10px"}}/>Optional Module
          </p>

          <h2 className='clwt' style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "700", textAlign: "center" }}>
            Advanced Site Tracking <br className='hidden md:block'/>& <span className='clmg'>Visual Intelligence</span>
          </h2>
          
          <div className='cldull pt-5 text-center' style={{ fontSize: "18px", fontWeight: "400", lineHeight: "1.5" }}>
            <p>
              An optional, deeply integrated tracking and visual intelligence layer that extends ERP visibility
              <br className="hidden md:block" /> into real-time site activity.
            </p>
          </div>
        </div>

        {/* Cards Grid: 1 column on mobile, 3 columns on laptop */}
        <div className='grid grid-cols-1 md:grid-cols-3 px-0 md:px-40 gap-5'>

          <div className='cardopt p-5 opticon1'>
            <p className='clwt opticonp pb-3' ><Users className='cardicon' size={50} /> Real-time workforce presence</p>
            <span className='cldull opticonspan'>and movement visibility</span>
          </div>

          <div className='cardopt p-5 opticon1'>
            <p className='clwt opticonp pb-3'><Truck className='cardicon' size={50} /> Equipment and vehicle tracking </p>
            <span className='cldull opticonspan'>with utilization analytics </span>
          </div>

          <div className='cardopt p-5 opticon1'>
            <p className='clwt opticonp pb-3'><MapPin className='cardicon' size={50} /> Floor-level and zone-based awareness </p>
            <span className='cldull opticonspan'>across large sites</span>
          </div>

          <div className='cardopt p-5 opticon1'>
            <p className='clwt opticonp pb-3'><ShieldAlert className='cardicon' size={50} /> Emergency mustering and </p>
            <span className='cldull opticonspan'>evacuation intelligence </span>
          </div>

          <div className='cardopt p-5 opticon1'>
            <p className='clwt opticonp pb-3'><Camera className='cardicon' size={50} /> AI-driven safety monitoring </p>
            <span className='cldull opticonspan'>using existing CCTV cameras </span>
          </div>

          <div className='cardopt p-5 opticon1'>
            <p className='clwt opticonp pb-3'><TriangleAlert className='cardicon' size={50} /> Automated alerts directly linked</p>
            <span className='cldull opticonspan'>to ERP workflows</span>
          </div>
        </div>

        {/* Bottom Banner: Adjusted padding for mobile */}
        <div className='cardopt mt-10 mx-0 md:mx-40 p-6'>
          <div className='flex flex-col md:flex-row items-center gap-4 text-center md:text-left' style={{width:"fit-content", margin:"0 auto"}}>
            <Eye className='opticon heart' size={50} />
            <div className='flex'>
              <p className='opticonp font-semibold flex'>Tracking is modular, optional, and fully integrated</p>
              <p className='opticonspan cldull'>— ensuring attendance, safety, productivity, and compliance remain in sync.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Optional;