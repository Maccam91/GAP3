import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function Proficiencies(){
    const [prof, setProf] = useState([{}])
    const {index} = useParams()
    useEffect(()=>{
        axios.get('https://www.dnd5eapi.co/api/classes/'+index).then(res=>{
            
            setProf(res.data.proficiencies)            
        })
    }, [])
    const profs = prof.map((prof, idx)=>{
        return(
            
                <li key={idx}>{prof.name}</li>
           
        )
    })
    
    return(
        <div className='proficiencies'><ul>{profs}</ul></div>
        
    )
}

export default Proficiencies