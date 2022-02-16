import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function ProfChoice(props){

    const [profChoice, setProfChoice] = useState([])
    const [choices, setChoices] = useState([])
    const [otherChoice, setOtherChoice] = useState([])
    const {index} = useParams()
    useEffect(()=>{
        axios.get('https://www.dnd5eapi.co/api/classes/'+index).then(res=>{
            setProfChoice(res.data.proficiency_choices)
                    
        })
    }, [])
 useEffect(()=>{
    for(let i = 0; i<profChoice.length;i++){
        const subChoice = profChoice[0]?.from || []
        const otherChoice = profChoice[1]?.from || []
        
        for(let y = 0;y<otherChoice.length;y++){
            // console.log(otherChoice)
            setOtherChoice(otherChoice)
        }

        for(let z = 0;z<subChoice.length;z++){
        setChoices(subChoice) 

        }
    }
 },[profChoice]) 
const abilChoices = choices.map((choices, idx)=>{
    return(
        <li key={idx}>{choices.name}</li>
    )
})
const secChoices = otherChoice.map((choices, idx)=>{
    return(
        <li key={idx}>{choices.name}</li>
    )
})
const profChoices = profChoice.map((profChoice, idx)=>{
        const {choose, type} = profChoice       
        
        return(
                <div className='profTitle' key={idx}>
                <span>{choose}</span>
                
                <span>{type}</span>
                </div>
        )
        
    })

    return(
        <div className='proficiency_choices'>
            <div>{profChoices}</div>
            <div className='profList'>
            <ul className='profList'>{abilChoices}</ul>
            <ul className='profList'>{secChoices}</ul>
            </div>
        </div>
        
    )
}

export default ProfChoice