import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function EqpDetails(){
    const [eqpDetails, setEqpDetails] = useState([{}])
    const {index} = useParams()
    useEffect(()=>{
        axios.get('https://www.dnd5eapi.co/api/equipment/'+index).then(res=>{
        // console.log(res.data)
        setEqpDetails(res.data)
    })
    }, [])

    return(
        <div>
            <h2>{eqpDetails.name}</h2>
            {/* <h3>{eqpDetails.equipment_category}</h3> */}
            {/* <h3>{eqpDetails.cost}</h3>
            <h3>{eqpDetails.weight}</h3> */}
        </div>
    )
}

export default EqpDetails