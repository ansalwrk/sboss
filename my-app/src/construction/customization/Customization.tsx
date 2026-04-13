import React from 'react';
import "./Customization.css";
import "../Cmain.css";
import { Shield, Users, Truck, MapPin, ShieldAlert, Camera, TriangleAlert, Eye, Building2, Sparkles, MoveUpRight, Dot } from 'lucide-react';

// Component definition
export default function Customization() {
return (
<><div className='allbg  '>

        <div className='grid grid-cols-1 py-20  pb-20'    style={{textAlign:"center"}}>
        <h2 className='clwt'style={{ fontSize:"36px ",fontWeight:"700 " }}>Customization & Deployment</h2>

        <p className='clmg pt-4'style={{ fontSize:"18px ",  fontWeight:"600 " }} > Built Around How Your Projects Actually Run </p>

        <p className='cldull pt-4 pb-5'  style={{ fontSize:" 18px",  fontWeight:"400 " }} > 
           SBOSS Construction ERP is designed to adapt — not force change.
        </p>
    </div>

    <div className='grid grid-cols-3 gap-5 px-40'>


                <div className='card'>
                    <h3 className='clmg' style={{fontSize:"20px",fontWeight:"700"}}> Customization </h3>
                    <ul>
                        <li className='flex'><Dot size={36} color="#15c19f" />  j </li>

                    </ul>

                 </div> 


                <div className='card'>
                    <h3 className='clmg' style={{fontSize:"20px",fontWeight:"700"}}>  Deployment Options </h3>
                    <ul>
                        <li className='flex'><Dot size={36} color="#15c19f" /> j  </li>
                        
                    </ul>

                 </div>

                <div className='card'>
                    <h3 className='clmg' style={{fontSize:"20px",fontWeight:"700"}}> Integration Ready  </h3>
                    <ul>
                        <li className='flex'><Dot size={36} color="#15c19f" />   </li>
                        
                    </ul>
                 </div>                 


    </div>




  
</div></>);}