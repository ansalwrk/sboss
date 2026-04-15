
import "./Customization.css";
import "../Cmain.css";
import { Shield, Users, Truck, MapPin, ShieldAlert, Camera, TriangleAlert, Eye, Building2, Sparkles, MoveUpRight, Dot } from 'lucide-react';

// Component definition
export default function Customization() {
return (
<><div className='allbg pb-40  '>

        <div className='grid grid-cols-1 py-20  pb-20'    style={{textAlign:"center"}}>
        <h2 className='clwt'style={{ fontSize:"36px ",fontWeight:"700 " }}>Customization & Deployment</h2>

        <p className='clmg pt-4'style={{ fontSize:"18px ",  fontWeight:"600 " }} > Built Around How Your Projects Actually Run </p>

        <p className='cldull pt-4 pb-5'  style={{ fontSize:" 18px",  fontWeight:"400 " }} > 
           SBOSS Construction ERP is designed to adapt — not force change.
        </p>
    </div>

    <div className='flex flex-rows-3 gap-5 px-40  '>


                <div className='card ' style={{textAlign:"left" , lineHeight:"1.5"}}>
                    <h3 className='clmg flex mb-5 ' style={{fontSize:"20px",fontWeight:"600"}}> Customization </h3>
                    <div className="cldull " style={{fontSize:"14px", fontWeight:"400"}}>

                        <ul className=""><li className='flex py-2 'style={{textAlign:"-moz-right"}}><Dot  size={35} color="#15c19f" /> Custom workflows and approval hierarchies </li></ul>
                        <ul className=""><li className='flex m t-2'><Dot size={35} color="#15c19f" /> Project-specific data fields and reports </li></ul>
                        <ul className=""><li className='flex py-1'><Dot size={35} color="#15c19f" /> Role-based dashboards for owners,<br/>PMs, engineers, and safety teams  </li></ul>
                        <ul className=""><li className='flex py-1'><Dot size={35} color="#15c19f" /> Configurable rules, alerts, and escalations </li></ul>
                        <ul className=""><li className='flex py-1'><Dot size={35} color="#15c19f" /> Localization for regional labor, tax, <br/>and compliance regulations  </li></ul>

                    </div>

                 </div> 
 

                <div className='card ' style={{textAlign:"left" , lineHeight:"1.5"}}>
                    <h3 className='clmg flex mb-5 ' style={{fontSize:"20px",fontWeight:"600"}}> Customization </h3>
                    <ul className="cldull " style={{fontSize:"14px", fontWeight:"400",}}>
                        <li className='flex py-1'><Dot className="blink" size={40} color="#15c19f" />Fully on-premises deployment</li>
                        <li className='flex py-1'><Dot size={35} color="#15c19f" />Private cloud (single-tenant) </li>
                        <li className='flex py-1'><Dot size={35} color="#15c19f" /> High availability and disaster recovery setups</li>
                        <li className='flex py-1'><Dot size={35} color="#15c19f" />Offline-first site operations with sync support </li>
                        
                    </ul>

                 </div>

                <div className='card  ' style={{textAlign:"left" , lineHeight:"1.5"}}>
                    <h3 className='clmg flex mb-5  ' style={{fontSize:"20px",fontWeight:"600"}}> Customization </h3>
                    <ul className="cldull " style={{fontSize:"14px", fontWeight:"400"}}>
                        <li className='flex py-1'><Dot size={35} color="#15c19f" /> Works with existing biometrics, CCTV,<br /> GPS, and IoT devices</li>
                        <li className='flex py-1'><Dot size={35} color="#15c19f" /> Open APIs for legacy systems and external tools</li>
                        <li className='flex py-1'><Dot size={35} color="#15c19f" /> Custom reports for clients, consultants, and authorities</li>

                    </ul>
                 </div>                 


    </div>




  
</div></>);}