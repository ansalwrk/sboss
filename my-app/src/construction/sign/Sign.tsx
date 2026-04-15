


import React from 'react';
import "./Sing.css";
import "../Cmain.css";
import { Building2, Sparkles,UserRound,Mail,Lock, MoveUpRight } from 'lucide-react';
export default Sign

// Component definition
function Sign() {                                                                   
return (
<><div className='allbg px-55 py-25'>
<div className='signcard bgwt  pt-20 pb-20'>


    <div className='grid grid-cols-2 pl-10 place-items-start '>

        <div className='grid grid-col-1 '>
            <h2 style={{fontSize:'24px', fontWeight:"700", color:"black"}}>Create Your SBOSS Account</h2>
            <p className='cldull'style={{fontSize:'12px', fontWeight:"400", color:"black"}} >Set up your account to access your business <br/>operating system.</p>
        
        </div>

        

        <div className='place-items-end pr-10 '>
            <div className='grid grid-col-1 '>
                <h2 style={{fontSize:'24px', fontWeight:"700", color:"black"}}>Create Your SBOSS Account</h2>
                 <p className='cldull'style={{fontSize:'12px', fontWeight:"400", color:"black"}} >Set up your account to access your business <br/>operating system.</p>
            </div>   
        </div>


 <div className=' grid grid-cols... py-5 '>


    <div className="input-container py-2  " style={{ position: 'relative' }}>
    <input id="input" type="text" className="input" defaultValue=""  

    placeholder='Your Name'   
        style={{ paddingLeft: '24px' }}/><div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',pointerEvents: 'none'}}>
    <UserRound size={16} color="#15c19f" /></div></div>
    

     <div className="input-container py-2" style={{ position: 'relative' }}>
    <input id="input" type="text" className="input" defaultValue=""  

    placeholder='Your Name'   
        style={{ paddingLeft: '24px' }}/><div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',pointerEvents: 'none'}}>
    <Mail size={16} color="#15c19f" /></div></div>



     <div className="input-container py-2" style={{ position: 'relative' }}>
    <input id="input" type="text" className="input" defaultValue=""  

    placeholder='Your Name'   
        style={{ paddingLeft: '24px' }}/><div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',pointerEvents: 'none'}}>
    <Lock size={16} color="#15c19f" /></div></div>
    
    
    
    
    
    
    
    
    </div>




















    
    </div>






    
</div></div></>);}