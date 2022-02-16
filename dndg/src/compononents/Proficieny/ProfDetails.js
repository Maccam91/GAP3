import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function ProfDetails(){
    const [profDetails, setProfDetails] = useState([])
    
    const {index} = useParams()
    console.log(index)
    useEffect(()=>{
    axios.get('https://www.dnd5eapi.co/api/proficiencies/'+index).then(res=>{
            console.log(res.data)
            setProfDetails(res.data)            
        })
    }, [])
    return(
        <div className='profDetails'>
            <h2 >Type: <p>{profDetails.type}</p></h2>
            
            <h2 >Name: <p>{profDetails.name}</p></h2>
            
        </div>
    )
}

export default ProfDetails