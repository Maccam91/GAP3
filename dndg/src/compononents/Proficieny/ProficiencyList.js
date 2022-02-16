import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function ProficienyList(props){
    const [proficencyList, setProficiencyList] = useState([])
    useEffect(()=>{
        axios.get('https://www.dnd5eapi.co/api/proficiencies').then(res=>{
            console.log(res.data.results)
            setProficiencyList(res.data.results)            
        })
    }, [])
    const allProficiencies = proficencyList.map((profs,idx)=>{
        return(
            
                <Link to={profs.index} key={profs.index}><li key={idx}>{profs.name}</li></Link>
            
        )
    })
    
    return(
        <div>
        <ul key={props}>{allProficiencies}</ul>
        </div>
    )
}
export default ProficienyList