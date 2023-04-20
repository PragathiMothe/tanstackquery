import  { useEffect, useState } from 'react'
import axios from "axios"

interface Employ{
  id:number,
  name:string,
  salary:number
}
const Employeepage = () => {
  const[isLoading,setIsLoading]=useState(true)
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/Employees").then((res)=>{
      setData(res.data)
      setIsLoading(false)
    })
  },[])
  if(isLoading){
    return <div>Loading....</div>
  }
  return (
    <div>
        <h2>Employee Details</h2>
        {data.map((emp:Employ)=>{
          return(
            <div key={emp.id}>{emp.name}</div>
          )
        })}
    </div>
  )
}
export default Employeepage






