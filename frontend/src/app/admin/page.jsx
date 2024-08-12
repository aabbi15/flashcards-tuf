import Mytable from "../components/mytable";
import Navbar from "../components/Navbar";

export default function Home(){

  return(

    <div className="bg-slate-950 h-screen w-screen">
      <Navbar/>
      <Mytable/>
    </div>
  )
}