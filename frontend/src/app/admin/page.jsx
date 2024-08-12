"use client";

import { useState } from "react";
import Mytable from "../components/mytable";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";


export default function Home() {

  const [showins, setShowins] = useState(false);
  const [topic, setTopic] = useState("");
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");

  const router = useRouter();

  function clicker() {
    setShowins(true);
  }

  async function submitter(e) {
    e.preventDefault();
    console.log(e);

    const data = { topic, ques, ans };

    try {
      const response = await fetch("/api/insertrow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Flashcard added successfully");
        setShowins(false);
        setTopic("");
        setQues("");
        setAns("");

        router.refresh;
      } else {
        console.error("Failed to add flashcard");
      }
    } catch (error) {
      console.error("Error submitting flashcard:", error);
    }
  }

  return (
    <div className="bg-slate-950 min-h-screen w-screen">
      <Navbar />

      <div className="text-white text-3xl font-bold py-3 text-center">Admin Page</div>
      <div className="text-white text-xl font-bold py-3 text-center">
        {showins ? (
          <div className="flex justify-center">
            <form className="form w-1/3" onSubmit={submitter}>
              <p className="text-white flex justify-center">Add Flashcard</p>

              <div className="flex gap-[6px] w-full  items-center justify-center">
                <label className="w-full">
                  <input
                    className="input"
                    type="text"
                    
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                  />
                  <span>Topic</span>
                </label>
              </div>

              <label className="w-full">
                <input
                  className="input"
                  type="text"
                  
                  value={ques}
                  onChange={(e) => setQues(e.target.value)}
                  required
                />
                <span>Question</span>
              </label>

              <label className="w-full">
                <input
                  className="input"
                  type="text"
                  
                  value={ans}
                  onChange={(e) => setAns(e.target.value)}
                  required
                />
                <span>Answer</span>
              </label>

              <button type="submit" className="submit">
                Submit
              </button>
              <a href="#" onClick={() => setShowins(false)} className="text-sm text-purple-400">
                Cancel
              </a>
            </form>
          </div>
        ) : (
          <button onClick={clicker} className="bg-green-600 p-2 rounded-lg hover:bg-green-700">
            Add Card
          </button>
        )}
      </div>
      <Mytable />
    </div>
  );
}
