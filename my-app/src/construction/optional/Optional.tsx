import React from 'react'
import "./Optional.css"
import "../Cmain.css"
import {  Shield, Users,Truck, MapPin, ShieldAlert,  Camera, TriangleAlert, Eye } from 'lucide-react';
export default Optional

// Component definition
function Optional() {                                                                   
  return (
<><div className='allbg pb-50    0'>

    <div className="grid grid-cols-1 place-items-center pb-10">   
        <p className="cardsm items-center flex flex-cols clmg" style={{fontSize:"13px", fontWeight:'600'}}>
            <Shield size={16} style={{marginRight:"10px"}}/>Optional Module
        </p>

        <h2 className='clwt ' style={{ fontSize:"48px ",fontWeight:"700", textAlign: "center" }}>
            Advanced Site Tracking < br className=''/>& <span className='clmg '>Visual Intelligence</span>
        </h2>
        <p className='cldull pt-5 grid grid-cols-1'  style={{ fontSize:" 18px",  fontWeight:"400 " ,lineHeight:"1.5" }} > An optional, deeply integrated tracking and visual intelligence layer that extends ERP visibility<br/> <span style={{ textAlign:'center'}}>into real-time site activity.</span></p>
    </div>



    <div className='grid grid-cols-3  px-40 gap-5'>

        <div className='cardopt pl-5 pr-5 pt-5 pb-5 opticon1'>
            <p className='clwt opticonp pb-3' ><Users className='opticon' size={50} /> Real-time workforce presence</p>
            <span className='cldull  opticonspan  ' >and movement visibility</span>
        </div>

        <div className='cardopt pl-5 pr-5 pt-5 pb-5 opticon1'>
            <p className='clwt opticonp pb-3 ' ><Truck    className='opticon' size={50} />
               Equipment and vehicle tracking </p>
            <span className='cldull opticonspan' >
               with utilization analytics </span>
        </div>

                <div className='cardopt pl-5 pr-5 pt-5 pb-5 opticon1'>
            <p className='clwt opticonp pb-3 ' ><MapPin     className='opticon' size={50} />
               Floor-level and zone-based awareness </p>
            <span className='cldull  opticonspan' >
               across large sites</span>
        </div>

                <div className='cardopt pl-5 pr-5 pt-5 pb-5 opticon1'>
            <p className='clwt opticonp pb-3 ' ><ShieldAlert    className='opticon' size={50} />
              Emergency mustering and  </p>
            <span className='cldull  opticonspan'>
               evacuation intelligence </span>
        </div>

                <div className='cardopt pl-5 pr-5 pt-5 pb-5 opticon1'>
            <p className='clwt opticonp pb-3' ><Camera    className='opticon' size={50} />
               AI-driven safety monitoring </p>
            <span className='cldull  opticonspan' >
               using existing CCTV cameras </span>
        </div>

                <div className='cardopt pl-5 pr-5 pt-5 pb-5 opticon1'>
            <p className='clwt opticonp pb-3    '><TriangleAlert     className='opticon' size={50} />
                Automated alerts directly linked</p>
            <span className='cldull  opticonspan' >
              to ERP workflows  </span>
        </div>
    </div>


    <div className=' cardopt  mt-10 mx-40  '>
        <div className= ' flex place-items-center gap-2  pt-5 pb-2 ' style={{width:"fit-content", margin:"0 auto"}}>
            <Eye className='opticon mr-3 heart ' size={50} />
            <p className='opticonp mb-2'>Tracking is modular, optional, and fully integrated</p>
            <span className='opticonspan cldull mb-2 '>— ensuring attendance, safety, productivity, and compliance remain in sync.</span>
        </div>

    </div>
    
    
    


</div></>
  )
}