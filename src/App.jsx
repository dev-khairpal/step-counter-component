import { useState } from "react"

const message = [
  "Step 1",
  "Step 2",
  "Step 3"
]


function App() {
  let [step, setStep] = useState(1);
    return (
        <div className="flex h-screen items-center justify-center rounded-lg">
            <div className="flex w-96 flex-col gap-20 rounded-lg bg-slate-800 p-10 text-white">
                <div className="flex justify-between">
                    <div className={`inline-block rounded-full  px-2 ${step >=1 ? 'bg-blue-600' : "bg-slate-400"}`}>
                        1
                    </div>
                    <div className={`inline-block rounded-full  px-2 ${step >=2 ? 'bg-blue-600' : "bg-slate-400"}`}>
                        2
                    </div>
                    <div className={`inline-block rounded-full  px-2 ${step >=3 ? 'bg-blue-600' : "bg-slate-400"}`}>
                        3
                    </div>
                </div>
                <div className="text-center">
                    <p>{message[step-1]} ❄️</p>
                </div>
                <div className="flex justify-center gap-2">
                    <button className="w-24 rounded-lg bg-slate-400 p-2" onClick={()=>{
                      if(step > 1)
                      setStep(step-1)
                    }} >
                        Previous
                    </button>
                    <button className="w-24 rounded-lg bg-slate-400 p-2" onClick={()=>{
                      if(step < 3)
                      setStep(step+1)
                    }}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
