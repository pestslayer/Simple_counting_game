import { useState, useEffect } from 'react'



function App() {
  let [count, setCount] = useState(0)
  let [timer, setTimer] = useState(0)

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer(timer - 1)
    }, 1000);
    return () => {
      clearInterval(interval)
    };
  },[timer])

  const incriment = () => setCount(count + 1)


  return (
    <>
    <div>
      <img src="/count.jpg" alt="" className='h-screen w-screen' />
      <div className='absolute top-40 pb-10 w-full flex justify-center  mb-20 flex-col'>
      <h1 className='flex justify-center text-8xl text-red-800 '>Time: {timer}</h1>
      <h3 className='flex justify-center p-3 text-red-800 text-5xl'>Count: {count}</h3>
      </div>
      <div className='absolute bottom-96 pb-10 w-full flex justify-center mb-20'>
        <button className='px-10 py-3 bg-green-700 hover:bg-green-900 text-yellow-400 rounded-lg text-2xl shadow-md focus:outline-none'
        onClick={() => {
          setTimer(10);
          setCount(0)
        }}
        disabled={timer !== undefined && timer !== 0}
        >
          Start
          </button>
      </div>
      <div className='absolute bottom-80 pb-10 w-full flex justify-center mb-20'>
        <button className='px-10 py-3 bg-green-700 hover:bg-green-900 text-yellow-400 rounded-lg text-2xl shadow-md focus:outline-none' 
        onClick={incriment}
        disabled={timer === 0}
        >
          Counter
        </button>
      </div>
      <div className='absolute bottom-64 pb-10 w-full flex justify-center mb-20'>
        <button className='px-10 py-3 bg-green-700 hover:bg-green-900 text-yellow-400 rounded-lg text-2xl shadow-md focus:outline-none' 
        onClick = {() => {
          setTimer(0)
          setCount(0)
        }}
        >
         Reset 
        </button>
      </div>
    </div>
    </>
  )
}

export default App
