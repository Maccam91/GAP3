import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Class(){
    const [dndClass, setDndClass] = useState([])

    const dndClasses = dndClass.map((job, idx)=>{
        return(
            
        <ul key={idx}>
        <Link to={job.index} key={job.index}><div className='cards' id={job.index}>{job.name}</div></Link>
        </ul>
        
        )
    })
    useEffect(()=>{
        axios.get('https://www.dnd5eapi.co/api/classes').then(res=>{
            console.log(res.data.results)
            setDndClass(res.data.results)
        })
    }, [])

    return(
        <section>
        <h1>DND Class Page</h1>
        
        <div className='CardContainer'>{dndClasses}</div>
        </section>
    )
}

export default Class