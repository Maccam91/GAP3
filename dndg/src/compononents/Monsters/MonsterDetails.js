import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MonsterData(){
    const [monsterData, setMonsterData] = useState({})
    const {index} = useParams()
    const {name, size, type, subtype, alignment, armor_class, hit_points, hit_dice, strength, dexterity, constitution, intelligence, wisdom, charisma, languages, challenge_rating, xp} = monsterData
    useEffect(()=>{
        axios.get('https://www.dnd5eapi.co/api/monsters/'+index).then(res=>{
            console.log(res.data)
            setMonsterData(res.data)
        })
    })
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Size: {size}</h2>
            <h3>Type: {type}</h3>
            <h3>Alignment: {alignment}</h3>
            <h3>AC: {armor_class}</h3>
            <h3>HP: {hit_points}</h3>
            <h3>Hit: {hit_dice}</h3>
            <h3>Str: {strength}</h3>
            <h3>Dex: {dexterity}</h3>
            <h3>Con: {constitution}</h3>
            <h3>Int: {intelligence}</h3>
            <h3>Wis: {wisdom}</h3>
            <h3>Cha: {charisma}</h3>
            <h3>Lang: {languages}</h3>
            <h3>Rating: {challenge_rating}</h3>
            <h3>XP: {xp}</h3>
        </div>
    )
}
export default MonsterData