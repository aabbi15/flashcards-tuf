"use client"

import { useEffect, useState } from "react";

import Image from "next/image";
import Card1 from "./components/card1";
import Navbar from "./components/Navbar";

export default function Home() {

  const [it, setIt] = useState(0);

  const [cat, setCat] = useState("");

  

  const [data, setData] = useState([{ques: "ques", ans: "ans"}]);

  const [loading, setLoading] = useState(true);

  const card = data[it];

  // let data = [];

  useEffect(() => {

    async function getData() {

        const res = await fetch("/api/getdata");
         const temp = await res.json();

         setData(temp.data);
        //  setData(temp2);
        // setCard(data[0]);
        setIt(0);
    setLoading(false);
         
        

        console.log(data);
        
    }

    getData();
    

    // console.log(data[it]);

}, []);


  function nextclicker() {

    console.log("nextclicker"); 
    console.log(data.length);
    if (it < data.length-1) {
        setIt(it+1);
        console.log(it);
        
        // setCard(data[it]);

        console.log(data[it]);
    }
}

function prevclicker() {

    console.log("prevclicker");
    console.log(data.length);
    if (it > 0) {
      console.log(it);
        setIt(it-1);
        // setCard(data[it]);

        console.log(data[it]);
    }
}

  return (

    <div className="bg-slate-950 h-screen w-screen ">
      <Navbar />


      <div className="flex items-center justify-center md:mt-28">
     
        <div className="bg-white md:w- auto py-6 px-4 rounded-lg shadow-lg">
        {
              loading ? <h1>Loading...</h1> :
              <div>
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold mb-4 text-center">Welcome</h1>
          </div>

          <div className="px-2">

            
           
             <Card1 card={card} />
          </div>
          <div className="flex items-center justify-between">
            <button onClick={prevclicker} className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-full mt-4">

              <Image src="leftarrow.svg" alt="leftarrow" width={20} height={20} />
            </button>
            
            <button onClick={nextclicker} className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-full mt-4">

              <Image src="rightarrow.svg" alt="leftarrow" width={20} height={20} />
            </button>
          </div>

</div>
         }
         
         </div>
      </div>


      </div>
      )
}