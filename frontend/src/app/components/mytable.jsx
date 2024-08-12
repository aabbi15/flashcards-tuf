"use client"

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'



export default function Mytable({ }) {

    const router = useRouter();



    const [data, setData] = useState([{ ques: "ques", ans: "ans" }]);

    const [loading, setLoading] = useState(true);

    async function  delrow(id) {

        console.log("hidelrwo",id);

        const url = "/api/delrow/";
        const response = await fetch(url, {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          
            //make sure to serialize your JSON body
            body: JSON.stringify({
              id:id
            })
          });

          setData(data.filter((card) => card.id !== id));

    }

    function deleter(id){

        console.log("hideltr",id);

        delrow(id);
        console.log("deleted row",id);
    }

    function Bin(id) {

        console.log("hi",id);
        return (
            
            <button onClick={() => deleter(id) } class="bin-button">
                <svg
                    class="bin-top"
                    viewBox="0 0 39 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line y1="5" x2="39" y2="5" stroke="white" stroke-width="4"></line>
                    <line
                        x1="12"
                        y1="1.5"
                        x2="26.0357"
                        y2="1.5"
                        stroke="white"
                        stroke-width="3"
                    ></line>
                </svg>
                <svg
                    class="bin-bottom"
                    viewBox="0 0 33 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <mask id="path-1-inside-1_8_19" fill="white">
                        <path
                            d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                        ></path>
                    </mask>
                    <path
                        d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                        fill="white"
                        mask="url(#path-1-inside-1_8_19)"
                    ></path>
                    <path d="M12 6L12 29" stroke="white" stroke-width="4"></path>
                    <path d="M21 6V29" stroke="white" stroke-width="4"></path>
                </svg>
            </button>

        )
    }


    
    useEffect(() => {

        async function getData() {

            const res = await fetch("/api/getdata");
            const temp = await res.json();

            setData(temp.data);

            setLoading(false);



            console.log(data);

        }

        getData();


    }, []);


    return (

        
        <div className="overflow-x-auto  text-white ">

            
            {loading ? <div>Loading...</div> :
                <table className="min-w-full  mt-2  shadow-md rounded-lg overflow-hidden">
                    <thead className="border-white border">
                        <tr className="">
                            <th className="px-4 py-2 text-left  border-r font-semibold">Row</th>
                            <th className="px-4 py-2 text-left border-r font-semibold">ID</th>
                            <th className="px-4 py-2 text-left border-r font-semibold">Question</th>
                            <th className="px-4 py-2 text-left border-r font-semibold">Answer</th>
                            <th className="px-4 py-2 text-left border-r font-semibold">Delete?</th>
                        </tr>
                    </thead>

                    <tbody>

                        {data.map((card, index) => (
                            <tr key={card.id} className="border-b ">

                                <td className="px-4 py-2 border-r">{card.id}</td>
                                <td className="px-4 py-2 border-r">{card.ques}</td>
                                <td className="px-4 py-2 border-r">{card.ans}</td>
                                <td className="px-4 py-2 border-r">{card.topic}</td>
                                <td className="px-4 py-2 border-r">{Bin(card.id)}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            }
        </div>
    );
}