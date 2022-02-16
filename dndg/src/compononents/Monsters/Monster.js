import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Monster(){
    const [monsters, setMonsters] = useState([])
    useEffect(()=>{

        axios.get('https://www.dnd5eapi.co/api/monsters').then(res=>{
            // console.log(res.data.results)
            setMonsters(res.data.results)
        })
    }, [])
    const monsterList = monsters.map((mon, idx)=>{
        return(
            <Link to={mon.index} key={mon.index}><li key={idx}>{mon.name}</li></Link>
        )
    })
    return(
        <div>
            <ul>
                {monsterList}
            </ul>
        </div>
    )
}
export default Monster