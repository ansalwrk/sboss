import React, { useState } from "react";
import "./Need.css";
import "../Cmain.css";
import Needimg from "../media/needimg.jpg";
import { Check, Shield } from 'lucide-react';

// Component definition
function Need() {
  const [displayTitle, setDisplayTitle] = useState(<div><h3>Construction ERP</h3><div className="needp cldull pt-5"><h4 className="pb-5">Built for Real-World Project Execution</h4><p className="pb-4 flex"><Check className="clmg mr-2" size={16}/> Project planning, BOQs, WBS, and milestone tracking</p><p className="pb-4 flex"><Check className="clmg mr-2" size={16}/> Contractor and subcontractor management</p><p className="pb-4 flex"><Check className="clmg mr-2" size={16}/> Material procurement and site inventory control</p><p className="pb-4 flex"><Check className="clmg mr-2" size={16}/> Equipment and machinery lifecycle management</p><p className="pb-4 flex"><Check className="clmg mr-2" size={16}/> Progress billing, certifications, and compliance</p><p className="pb-4 flex"><Check className="clmg mr-2" size={16}/> Audit-ready reports for clients and authorities</p></div></div>      
  );
  const [displayContent, setDisplayContent] = useState();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [displayAlltext, setDisplayAlltext] = useState();






  const cards = [
    { id: 1, name: "Construction ERP className", title: "Construction ERP",  content: "Built for Real-World Project Execution", 
      alltext:<div className="needp cldull pt-5 ">
        <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/>  Project planning, BOQs, WBS, and milestone tracking  </p>
        <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/>  Contractor and subcontractor management  </p>
        <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/>  Material procurement and site inventory control  </p>
        <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/>  Equipment and machinery lifecycle management  </p>
        <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/>  Progress billing, certifications, and compliance  </p> 
        <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/>  Audit-ready reports for clients and authorities  </p>
      </div> },
    { id: 2, name: "Accounting", title: "Accounting",   content: "Project-Wise Financial Control" ,       alltext:<div className="needp cldull pt-5 ">
        <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/>Cost centers by project, package, and site  </p>
        <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/>Vendor bills, client invoices, and certifications   </p>
        <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/>Expense tracking with automatic account mapping </p>
        <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/>Retention, mobilization, and variation management</p>
        <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/>Tax configuration and statutory compliance</p> 
        <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/>Audit-ready financial statements</p>
      </div> },
    { id: 3, name: "Project Management ", title: "Project Management ",  content: "End-to-End Project Transparency  " , alltext:<div className="needp cldull pt-5 ">
<p className="pb-4 flex"><Check className="clmg mr-2" size={16}/>Schedules, tasks, and dependencies</p>
<p className="pb-4 flex"><Check className="clmg mr-2" size={16}/>Client contracts, variations, and approvals</p>
<p className="pb-4 flex"><Check className="clmg mr-2" size={16}/>Progress-based billing and payment tracking</p>
<p className="pb-4 flex"><Check className="clmg mr-2" size={16}/>Centralized communication and documentation</p>
<p className="pb-4 flex"><Check className="clmg mr-2" size={16}/>Project performance dashboards</p>
      </div> },
    { id: 4, name: "Procurement", title: "Procurement",  content: "Never Run Out — Never Overstock" , alltext:<div className="needp cldull pt-5 ">
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> BOQ-linked material planning</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Automated purchase requests and approvals</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Vendor comparison and procurement analytics</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Multi-site inventory visibility</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Material consumption vs budget tracking</p>
      </div> },
    { id: 5, name: "HR & Payroll", title: "HR & Payroll", content: "Total Control Over Site Manpower" , alltext:<div className="needp cldull pt-5 ">
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Employee and contractor master records</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Attendance, shifts, and work hours</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Biometric and mobile attendance support</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Location captured only during attendance punch</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Wages, payroll, and statutory compliance</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Productivity and utilization analytics</p>
      </div> },
    { id: 6, name: "Communication", title: "Communication", content: "Email, Chat & Meetings — Fully Owned" , alltext:<div className="needp cldull pt-5 ">
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Enterprise email and shared calendars</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Secure internal chat for site coordination</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Audio and video meetings for remote reviews</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Screen sharing for drawings and discussions</p>
      </div> },
    { id: 7, name: "AI Vision", title: "AI Vision",  content: "Proactive Site Risk Detection" , alltext:<div className="needp cldull pt-5 ">
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Helmet, PPE, and safety gear detection</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Unsafe behavior and restricted-zone alerts</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Automatic incident evidence capture</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Direct linkage to ERP safety logs and reports</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Works with existing CCTV infrastructure</p>
      </div> },
    { id: 8, name: "Quality & Safety", title: "Quality & Safety", content: "Built Into Daily Operations" , alltext:<div className="needp cldull pt-5 ">
 <p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Digital safety inspections and checklists</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Non-conformance and corrective action tracking</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Permit-to-work and safety approvals</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Incident reporting and audit trails</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Client- and authority-ready compliance reports</p>
      </div> },
    { id: 9, name: "Documents", title: "Documents", content: "One Trusted Source of Truth" , alltext:<div className="needp cldull pt-5 ">
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Central repository for drawings, BOQs, and reports</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Version control and approval workflows</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Role-based access for owners, PMs, and contractors</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Secure internal sharing without public links</p>
      </div> },
    { id: 10, name: "AI Assistant", title: "AI Assistant", content: "Construction Intelligence Without Data Leakage " , alltext:<div className="needp cldull pt-5 ">
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Automated project summaries and reports</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Invoice, measurement, and document generation</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Contract and resume analysis</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Risk, delay, and progress insights</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Runs fully within your infrastructure</p>
      </div> },
    { id: 11, name: "Analytics", title: "Analytics", content: "From Site to Boardroom — Live" , alltext:<div className="needp cldull pt-5 ">
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Project, site, and portfolio dashboards</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Cost, schedule, safety, and productivity KPIs</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Role-based views for management and site teams</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> On-premises or private cloud deployment</p>
<p className="pb-4 flex"><Check className=" clmg mr-2" size={16}/> Encrypted data with full audit trails</p>
      </div> },
  ];


  const handleCardClick = (card: any) => {
    setDisplayContent(card.content);
    setActiveCard(card.id);
    setDisplayTitle(card.title);
    setDisplayAlltext(card.alltext);
  };

  // First 6 cards
  const firstRowCards = cards.slice(0, 6);
  // Next 5 cards
  const secondRowCards = cards.slice(6, 11);

  return (
    <div className='allbg pb-80'>
      <div className='grid grid-cols-1 pt-60 pb-10' style={{ textAlign: "center" }}>
        <p className='clmg' style={{ fontSize: "16px", fontWeight: "650" }}>
          EVERYTHING YOU NEED
        </p>
        <h2 className='clwt' style={{ fontSize: "48px", fontWeight: "700" }}>
          One Platform. One Secure Core. <span className='clmg'>Total Control.</span>
        </h2>
        <p className='cldull pt-4' style={{ fontSize: "18px", fontWeight: "400" }}>
          SBOSS ERP brings all your construction functions into a single, clean workspace.
        </p>
      </div>






      <div className="flex flex-col items-center justify-center">

        <div className='flex grid-cols-6  gap-2 pb-5'>
          {firstRowCards.map((card) => (
            <div
              key={card.id}
              className={`btnneed cursor-pointer btn11 transition-all duration-300 ${activeCard === card.id ? 'active-card' : ''}`}
              onClick={() =>  handleCardClick(card)}

              
            >
              {card.name}
            </div>
          ))}</div>

        <div className='flex grid-cols-6 gap-2 pb-5'>
          {secondRowCards.map((card) => (
            <div
              key={card.id}
              className={`btnneed cursor-pointer btn11  transition-all duration-300 ${activeCard === card.id ? 'active-card' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              {card.name}
            </div>
          ))}
        </div>

        {/* Dynamic content based on active card */}
        <div className='grid grid-cols-2 px-13  '>
          <div className='cardbig  pt-15  pl-12' style={{ borderRadius: "15px 0px 0px 15px" }}>
            <h3 className='clwt pt-2 pb-4' style={{ fontSize: "30px", fontWeight: "700" }}>
              {displayTitle}
            </h3>

          
              <p className='cldull ' style={{ fontSize: "16px", fontWeight: "400" }}>
                {displayContent}
              </p>
          

                        <h3 className='clwt pt-2' style={{ fontSize: "30px", fontWeight: "700" }}>
              {displayAlltext}
            </h3>

                          <p className='flex flex-row cldull pt-4' style={{fontSize: "12px", fontWeight: "400" }}>
                <Shield className=" clmg mr-2" size={16}   /> Self-hosted and secure • Your data stays with you
              </p>





          </div>



          
        


          <div className='cardbig' style={{ borderRadius: "0px 15px 15px 0px" }}>
            <img className='needimg' src={Needimg} alt="Need illustration" />
          </div>
        </div>

        <div className="grid grid-cols-1 place-items-center">
          <p className="cardsm items-center flex flex-cols clmg" style={{ fontSize: "13px", fontWeight: '600' }}>
            <Shield size={16} style={{ marginRight: "10px" }} />100% Self-Hosted
          </p>
        </div>
      </div>
    </div>
  );
}

export default Need;