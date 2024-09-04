import "./segundo.css"
import { useState } from "react"
export default function Segundocomponente(){
     const[num, setNum] = useState(0)
     function handleFive(){
        setNum(5)
     }
     function handleZero(){
        setNum(0)
     }
    return(
    <p className='segundop'> 
    {num}
    {num === 0 ? <></> : <button onClick={handleZero}>Zero</button>}
    {num === 5 ? <></> : <button onClick={handleFive}>Five</button>}
       
    </p>
    )
}