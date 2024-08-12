"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";

let data =[];
let card;


export default function FlipCard({card,state}) {

    const [isFlipped, setIsFlipped] = useState(false);
    const[showans, setShowans] = useState(false);

    useEffect(() => {
       

        

          
        
    }, [card]);

    useEffect(() => {
        setIsFlipped(false);
        setShowans(false);

        setTimeout(() => {
            setShowans(true);
          }, 700);

    }, [card]);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    function mybutt() {

        
        return(
            <button onClick={handleFlip} className="bg-slate-950 p-1 rounded-full hover:bg-green-600" >
                
                <Image src="flip.svg" width={25} height={25} alt="flip"/>
                </button>
        )

    }

    

   

    
    

   

    

   

    return (
        <div className="flip-card " >

            <div className={`flip-card-inner  ${isFlipped ? "flipped" : ""}`}>
                <div className="flip-card-front relative hover:ring-1 hover:ring-[#ff7f50] " >
                    <h2 className="title pb-2">Question</h2>
                    <p className="text-md">{card.ques}</p>
                    <div className="absolute bottom-0 right-0 px-1">    
                    {mybutt()}
                    </div>
                </div>
                <div className="flip-card-back hover:ring-1 hover:ring-[white]">
                    <h2 className="title">{showans ? "Answer" :""}</h2>
                    <p className="text-md">{showans ? card.ans :""}</p>

                    <div className="absolute bottom-0 right-0 px-1">    
                    {mybutt()}
                    </div>
                </div>
                
                
            </div>



            
        </div>
    );
}
