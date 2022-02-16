import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Proficiencies from './Proficiencies'
import ProfChoice from './Profchoices'
import axios from 'axios'


function ClassDesc(){
const [classDesc, setClassDesc] = useState({})
const {index} = useParams()

const {name, hit_die, proficiencies} = classDesc



useEffect(()=>{
    axios.get('https://www.dnd5eapi.co/api/classes/'+index).then(res=>{
        // console.log(res.data)
        setClassDesc(res.data)
        
        
    })
}, [])


    return(

        <div >
            <h1 className='ClassDetails'>Class Name: &nbsp;{name}</h1>
            <h2 className='ClassDetails'>Hit Die: &nbsp;{hit_die}</h2>
            <h3 className='ClassDetails'>Proficiencies: &nbsp;</h3>
            <Proficiencies/>
            <ProfChoice/>
        </div>
    )
}

export default ClassDesc    