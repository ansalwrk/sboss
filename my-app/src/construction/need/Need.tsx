import "./Need.css";
import "../Cmain.css";
import Needimg from  "../media/needimg.jpg";
import { Check } from 'lucide-react';

// Component definition
function Need() {
  return (
<><div className='allbg pb-80'>

    <div className='grid grid-cols-1 pt-60 pb-10 ' style={{textAlign:"center"}}>
        <p className='clmg'style={{ fontSize:"16px ",  fontWeight:"650 " }} >EVERYTHING YOU NEED </p>
        <h2 className='clwt'style={{ fontSize:"48px ",fontWeight:"700 " }}>One Platform. One Secure Core. <span className='clmg'>Total Control.</span></h2>
        <p className='cldull pt-4'  style={{ fontSize:" 18px",  fontWeight:"400 " }} >SBOSS ERP brings all your construction functions into a single, clean workspace.  </p>
    </div>
    
    
<div className="flex flex-col items-center justify-center">
 <div className='flex grid-cols-6 gap-2 pb-5'>

        <div className='btnneed '> Construction ERP  </div>         <div className='btnneed'> Accounting  </div>
        <div className='btnneed'>Project Management  </div>         <div className='btnneed'> Procurement  </div>
        <div className='btnneed'> HR & Payroll </div>         <div className='btnneed'>  Communication </div>
    </div>

 <div className='flex grid-cols-6 gap-2 pb-5'>
        <div className='btnneed'>AI Vision </div>        <div className='btnneed'>Quality & Safety</div>
        <div className='btnneed'>Documents</div>     <div className='btnneed'>AI Assistant</div>   
        <div className='btnneed'>Analytics</div>  
    </div>
  </div>









  <div className='grid grid-cols-2 px-13 pt-10'> <div className='cardbig pt-15 pl-12' style={{borderRadius:" 15px 0px 0px 15px"}}>


      <h3 className='clwt' style={{fontSize:"30px ", fontWeight:"700"}}>Accounting</h3>
      <p className='cldull pt-2' style={{fontSize:"16px", fontWeight:"400"}}>Project-Wise Financial Control</p>

      <ul  style={{fontSize:"",fontWeight:""}}>
        <li className='flex flex-row ... cldull'> <Check size={16} color="#15c19f" />    Cost centers by project, package, and site</li>



      </ul>










    </div><div className='cardbig' style={{borderRadius:" 0px 15px 15px 0px"}}>  <img className='needimg' src={Needimg} /> </div>
  </div>
  <div className=" flex-cols-1 items-center">
    <div className="cardsm items-center ">100% Self-Hosted</div>
  </div>
  </div></>
  )
}
export default Need