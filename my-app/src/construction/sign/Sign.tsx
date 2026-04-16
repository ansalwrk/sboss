import React, { useState } from 'react';
import { Building2, UserRound, Mail, Lock, MessageSquare, Phone, Paperclip } from 'lucide-react';
import G from '../media/g.jpg';
import Fb from '../media/fb.png';
import T from '../media/t.png';
import Li from '../media/li.png';
import "./Sing.css";

export default function Sign() {
    // State to track which side the overlay is on
    const [isEnquiryMode, setIsEnquiryMode] = useState(false);

    return (
        <div className="allbg min-h-screen flex items-center justify-center p-4">
            <div className={`sign-container ${isEnquiryMode ? 'active' : ''}`}>
                
                {/* --- OVERLAY LAYER (The Moving Green Part) --- */}
                <div className="overlay-container">
                    <div className="overlay">
                        {/* Content visible when overlay is on the Right (Signup View) */}
                        <div className="overlay-panel overlay-right">
                            <h2 className="text-2xl font-bold mb-4">Need a Solution?</h2>
                            <p className="mb-8 text-sm">Talk to our experts and get the right solution for your business.</p>
                            <button className="ghost-btn" onClick={() => setIsEnquiryMode(true)}>ENQUIRE NOW</button>
                        </div>
                        
                        {/* Content visible when overlay is on the Left (Enquiry View) */}
                        <div className="overlay-panel overlay-left">
                            <h2 className="text-2xl font-bold mb-4">Get Started</h2>
                            <p className="mb-8 text-sm">Create your SBOSS account and access your business operating system.</p>
                            <button className="ghost-btn" onClick={() => setIsEnquiryMode(false)}>SIGN UP</button>
                        </div>
                    </div>
                </div>

                {/* --- FORM 1: CREATE ACCOUNT (Left Side) --- */}
                <div className="form-container sign-up-container">
                    <form className="form-content">
                        <h2 className="font-bold text-2xl mb-2">Create Your SBOSS Account</h2>
                        <p className="cldull text-xs mb-6">Set up your account to access your business <br/> operating system.</p>
                        
                        <div className="input-group">
                            <UserRound className="input-icon" size={18} />
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="input-group">
                            <Mail className="input-icon" size={18} />
                            <input type="email" placeholder="Work Email Address" />
                        </div>
                        <div className="input-group">
                            <Lock className="input-icon" size={18} />
                            <input type="password" placeholder="Create Password" />
                        </div>
                        
                        <button className="main-btn mt-4">CREATE ACCOUNT</button>
                        <p className="text-xs mt-4 cldull">Already have an account? <span className="clmg cursor-pointer">Sign In</span></p>
                        
                        <div className="flex gap-4 mt-6">
                            <img src={G} alt="G" className="social-icon" />
                            <img src={Fb} alt="F" className="social-icon" />
                            <img src={T} alt="T" className="social-icon" />
                            <img src={Li} alt="L" className="social-icon" />
                        </div>
                    </form>
                </div>

                {/* --- FORM 2: ENQUIRY (Right Side) --- */}
                <div className="form-container enquiry-container">
                    <form className="form-content">
                        <p className="text-emerald-500 font-bold text-[10px] tracking-widest">ETHICAL INTELLIGENT TECHNOLOGIES</p>
                        <h2 className="font-bold text-2xl mb-6">Let's Work Together</h2>
                        
                        <div className="input-group"><UserRound className="input-icon" size={18} /><input type="text" placeholder="Full Name *" /></div>
                        <div className="input-group"><Phone className="input-icon" size={18} /><input type="text" placeholder="Mobile Number *" /></div>
                        <div className="input-group"><Mail className="input-icon" size={18} /><input type="email" placeholder="Email Address *" /></div>
                        <div className="input-group"><Building2 className="input-icon" size={18} /><input type="text" placeholder="Company Name" /></div>
                        <div className="input-group"><MessageSquare className="input-icon" size={18} /><textarea placeholder="Message *" /></div>
                        
                        <div className="flex items-start gap-2 text-xs cldull cursor-pointer border rounded-full px-4 py-1 mb-4">
                            <Paperclip size={14} /> Attach File
                        </div>
                        
                        <button className="main-btn">SUBMIT</button>
                    </form>
                </div>

            </div>
        </div>
    );
}