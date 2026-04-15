


import React from 'react';
import Ig from '../media/ig.jpg'
import "./Sing.css";
import "../Cmain.css";
import { Building2, ShieldCheck,Sparkles,Paperclip,UserRound,Mail,Lock, MoveUpRight,MessageSquare , Phone } from 'lucide-react';
export default Sign

// Component definition
function Sign() {                                                                   
return (
<><div className='allbg px-50 py-25'>
<div className='signcard bgwt  pt-8 pb-10'>


    <div className='grid grid-cols-2 pl-15 place-items-start '>

        <div className='grid grid-col-1 '>
            <h2 className='py-3' style={{fontSize:'24px', fontWeight:"700", color:"black"}}>Create Your SBOSS Account</h2>
            <p className='cldull'style={{fontSize:'14px', fontWeight:"500",lineHeight:"1.5" }} >Set up your account to access your business <br/>operating system.</p>
        
         <div className=' grid grid-cols... py-5 '>


    <div className="input-container py-2  " style={{ position: 'relative' }}>
    <input id="input" type="text" className="input" defaultValue=""  

    placeholder='   Your Name'   
        style={{ paddingLeft: '24px' }}/><div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',pointerEvents: 'none'}}>
    <UserRound size={20} color="#15c19f" /></div></div>
    

     <div className="input-container py-2" style={{ position: 'relative' }}>
    <input id="input" type="text" className="input" defaultValue=""  

    placeholder='   Your Name'   
        style={{ paddingLeft: '24px' }}/><div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',pointerEvents: 'none'}}>
    <Mail size={20} color="#15c19f" /></div></div>



     <div className="input-container py-2" style={{ position: 'relative' }}>
    <input id="input" type="text" className="input" defaultValue=""  

    placeholder='   Your Name'   
        style={{ paddingLeft: '24px' }}/><div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',pointerEvents: 'none'}}>
    <Lock size={20} color="#15c19f" /></div></div>

    <div className='btn grid grid-col-1  gap-4 const1' style={{fontSize:"15px", fontWeight:"700", backgroundColor:"#23d4bb",textAlign:"center", borderColor:"#ffffff2f", padding:"8px", borderRadius:"20px"}}>
           CREATE ACCOUNT   </div>
           <p className='cldull py-3' style={{fontSize:"12", fontWeight:"400"}}>Already have an account? Sign In</p>
    <div className='pl-15'>
    <img className='ig ' src={Ig} alt="Need illustration" /> 
    </div>
    
    </div>
    </div>

        

        <div className='place-items-start pl-20  '>
            <div className='grid grid-col-1 px-8' >
                <p style={{ fontSize:"14px", fontWeight:"600", color:"#15C19F"}}>
                    ETHICAL INTELLIGENT TECHNOGIES   </p>
                <h2 className='py-3' style={{fontSize:'20px', fontWeight:"700", color:"black"}}>Let's Work Together</h2>
            </div> 



    <div className="input-container py-2  " style={{ position: 'relative' }}>
    <input id="input" type="text" className="input" defaultValue=""  

    placeholder='   Full Name * '   
        style={{ paddingLeft: '24px' }}/><div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',pointerEvents: 'none'}}>
    <UserRound size={20} color="#15c19f" /></div></div>
        <div className="input-container py-2  " style={{ position: 'relative' }}>
    <input id="input" type="text" className="input" defaultValue=""  

    placeholder='   Mobile Number *'   
        style={{ paddingLeft: '24px' }}/><div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',pointerEvents: 'none'}}>
    <Phone size={20} color="#15c19f" /></div></div>
        <div className="input-container py-2  " style={{ position: 'relative' }}>
    <input id="input" type="text" className="input" defaultValue=""  

    placeholder='   Email Address *'   
        style={{ paddingLeft: '24px' }}/><div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',pointerEvents: 'none'}}>
    <Mail size={20} color="#15c19f" /></div></div>
        <div className="input-container py-2  " style={{ position: 'relative' }}>
    <input id="input" type="text" className="input" defaultValue=""  

    placeholder='   Enter Captcha *'   
        style={{ paddingLeft: '24px' }}/><div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',pointerEvents: 'none'}}>
    <Building2 size={20} color="#15c19f" /></div></div>
        <div className="input-container py-2  " style={{ position: 'relative' }}>
    <input id="input" type="text" className="input" defaultValue=""  

    placeholder='   Your Name'   
        style={{ paddingLeft: '24px' }}/><div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',pointerEvents: 'none'}}>
    <MessageSquare size={20} color="#15c19f" /></div></div>
        <div className="input-container py-2  " style={{ position: 'relative' }}>
    <input id="input" type="text" className="input" defaultValue=""  

    placeholder='   Your Name'   
        style={{ paddingLeft: '24px' }}/><div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',pointerEvents: 'none'}}>
    <ShieldCheck size={20} color="#15c19f" /></div></div>

    <div className=' card12 flex mt-2 mb-3 cldull ' style={{backgroundColor:"#00000000" }}> 
        <Paperclip className='pr-1' size={18} color="#6b6b6b" />Attach File</div>
    
                <div className='btn flex gap-4 const1' style={{backgroundColor:"#23d4bb", borderColor:"#ffffff2f", padding:"8px 110px", borderRadius:"20px"}}>
                       Submit   </div>





        </div>
    </div>
</div></div></>);}