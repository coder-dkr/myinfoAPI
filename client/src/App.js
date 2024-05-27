import React,{useEffect, useState} from 'react'

export default function App() {

const [myapidata,setmyapidata] = useState({})

useEffect(() => {
  fetch('/myinfoapi').then(
    response => response.json()
  ).then(
    data => {
      setmyapidata(data)
    }
  )
},[])

  return (
    <div>
   {(typeof myapidata.owner === 'undefined') ? (<p>Loading...</p>) :
    (myapidata.owner.map((value,index)=>(
     <p key={index} >{value}</p>
     )))} 
 

    </div>
  )
}
