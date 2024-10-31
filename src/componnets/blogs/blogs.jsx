import { useEffect } from "react"
import { useState } from "react"

export default function Bolgs(){
const [getblogs, setblogs] = useState([])

useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data =>console.log(data))
}, [])

    return(
        <div>
            
        </div>
    )
}
