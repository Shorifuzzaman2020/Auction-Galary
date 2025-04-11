
import { Suspense } from 'react';
import './App.css'
import Materials from './materials/Materials';
const fetchData=async()=>{
  const res=await fetch('data.json');
  return res.json();
}

function App() {
  const fetchPromise=fetchData();
  

  return (
    <>
      <Suspense>
        <Materials fetchPromise={fetchPromise}></Materials>
      </Suspense>
      
    </>
  )
}

export default App
