import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function ProfChoice(){

    const [profChoice, setProfChoice] = useState([])
    
    const {index} = useParams()
    useEffect(()=>{
        axios.get('https://www.dnd5eapi.co/api/classes/'+index).then(res=>{
            console.log(res.data)
            setProfChoice(res.data.proficiency_choices)
                    
        })
    }, [])
    for(let i = 0; i<profChoice.length;i++){
        const subChoice = profChoice[i].from
        const ul = <ul></ul>
        for(let z = 0;z<subChoice.length;z++){
            console.log(subChoice[z])
            const choicecs = subChoice.map((subChoice,idx)=>{
                return(
                    <ul key={idx} ><li>{subChoice}</li></ul>
                )
            })
            
        }}
   
    // const choices = []
    
    // useEffect(()=>{
    //     console.log(profChoice)
    //     console.log('useEffect number 2 is running')
    //     for(let i = 0; i<profChoice.length;i++){
    //         const subChoice = profChoice[i].from
    //         const ul = <ul></ul>
    //         for(let z = 0;z<subChoice.length;z++){
    //             console.log(subChoice[z])
                
    //         }
    //         choices.push(subChoice)
    //     }
    // },[profChoice])
    
    return(
        <div className='proficiency_choices'>
            
        </div>
        
    )
}

export default ProfChoice