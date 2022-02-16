import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Equipment(){
    const [equipment, setEquipment] = useState([])
    useEffect(()=>{
        axios.get('https://www.dnd5eapi.co/api/equipment').then(res=>{
            setEquipment(res.data.results)
        })
    }, [])
    const  eqpList = equipment.map((eqp,idx)=>{
        return(
            <Link to={eqp.index} key={eqp.index}><li key={idx}>{eqp.name}</li></Link>
        )
    })
    return(
        <div>
            <ul>
                {eqpList}
            </ul>
        </div>
    )
}
export default Equipment