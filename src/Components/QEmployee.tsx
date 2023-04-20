
import axios from "axios"
import {useQuery} from "@tanstack/react-query"

interface Employ{
  id:number,
  name:string,
  salary:number
}
const QEmployee = () => {
  const {isLoading,data} = useQuery(['employeeDetails'],()=>{
    return  axios.get("http://localhost:5000/Employees")
  })
  if(isLoading){
    return <div>Loading....</div>
  }
  return (
    <>
    <div>
      {
        data?.data.map((finalresult:Employ)=>{
          return <div key={finalresult.id}>{finalresult.name}</div>
        })
      }
    </div>
    </>
  )
}
export default QEmployee






