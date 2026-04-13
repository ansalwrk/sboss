import React, { useState } from "react";
import "./Need.css";
import "../Cmain.css";
import Needimg from "../media/needimg.jpg";
import { Check, Shield } from 'lucide-react';

// Component definition
function Need() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [displayTitle, setDisplayTitle] = useState("Project-Wise Financial Control");
  const [displayContent, setDisplayContent] = useState("Accounting");

  const cards = [
    { id: 1, name: "Construction ERP", title: "Con", content: "11" },


    { id: 2, name: "Accounting", title: "Accounting", content: "Accounting" },
    { id: 3, name: "Project Management ", title: " Project Management ", content: "Project Management " },
    { id: 4, name: "Procurement", title: " Procurement", content: "Procurement" },
    { id: 5, name: "HR & Payroll", title: "HR & Payroll", content: "HR & Payroll" },
    { id: 6, name: "Communication", title: "Communication", content: "Communication" },
    { id: 7, name: "AI Vision", title: "AI Vision", content: "AI Vision" },
    { id: 8, name: "Quality & Safety", title: "Quality & Safety", content: "Quality & Safety" },
    { id: 9, name: "Documents", title: "Documents", content: "Documents" },
    { id: 10, name: "AI Assistant", title: "AI Assistant", content: "AI Assistant" },
    { id: 11, name: "Analytics", title: "Analytics", content: "Analytics" }
  ];

  const handleCardClick = (card: any) => {
    setActiveCard(card.id);
    setDisplayTitle(card.title);
    setDisplayContent(card.content);
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
        <div className='flex grid-cols-6 gap-2 pb-5'>
          {firstRowCards.map((card) => (
            <div
              key={card.id}
              className={`btnneed cursor-pointer transition-all duration-300 ${activeCard === card.id ? 'active-card' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              {card.name}
            </div>
          ))}
        </div>

        <div className='flex grid-cols-6 gap-2 pb-5'>
          {secondRowCards.map((card) => (
            <div
              key={card.id}
              className={`btnneed cursor-pointer transition-all duration-300 ${activeCard === card.id ? 'active-card' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              {card.name}
            </div>
          ))}
        </div>

        {/* Dynamic content based on active card */}
        <div className='grid grid-cols-2 px-13 pt-10'>
          <div className='cardbig pt-15 pl-12' style={{ borderRadius: "15px 0px 0px 15px" }}>
            <p className='cldull pt-2' style={{ fontSize: "16px", fontWeight: "400" }}>
              {displayTitle}
            </p>
            <ul>
              <li className='flex flex-row cldull'>
                <Check size={16} color="#15c19f" /> Cost centers by project, package, and site
              </li>
              <h3 className='clwt' style={{ fontSize: "30px", fontWeight: "700" }}>
                {displayContent}
              </h3>
            </ul>
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