"use client";

import Image from "next/image";
import { useState } from "react";

export default function FlipCard() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    function mybutt() {

        /* From Uiverse.io by AKAspidey01 */

        return(
            <button onClick={handleFlip} className="bg-slate-950 p-1 rounded-full" >
                
                <Image src="flip.svg" width={25} height={25} alt="flip"/>
                </button>
        )

    }

    return (
        <div className="flip-card" >

            <div className={`flip-card-inner  ${isFlipped ? "flipped" : ""}`}>
                <div className="flip-card-front relative" >
                    <h2 className="title">Front</h2>
                    <p>Click to flip</p>
                    
                </div>
                <div className="flip-card-back">
                    <h2 className="title">Back</h2>
                    <p>More details</p>
                </div>
                
                <div className="absolute bottom-0 right-0 px-1">    
                    {mybutt()}
                    </div>
            </div>



            
        </div>
    );
}
