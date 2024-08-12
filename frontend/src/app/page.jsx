import Image from "next/image";
import Card1 from "./components/card1";
import Navbar from "./components/Navbar";

export default function Home() {

  return (

    <div className="bg-slate-950 h-screen w-screen ">
      <Navbar />

      <div className="flex items-center justify-center md:mt-28">
        <div className="bg-white md:w- auto py-6 px-4 rounded-lg shadow-lg">

          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold mb-4 text-center">Welcome</h1>
          </div>

          <div className="px-2">
          <Card1 />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-full mt-4">

              <Image src="leftarrow.svg" alt="leftarrow" width={20} height={20} />
            </button>
            
            <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-full mt-4">

              <Image src="rightarrow.svg" alt="leftarrow" width={20} height={20} />
            </button>
          </div>

        </div>

      </div>


      </div>
      )
}