import Class from "../Class/Class"
import {Link} from 'react-router-dom'
import ProficienyList from "../Proficieny/ProficiencyList"
import Equipment from "../Equipment/Equipment"
function Home(){

    return(
        <main>
            <div className="index">
                <Link to={'/classes'} element={<Class/>}><p>Classes</p></Link>
                <Link to={'/proficiencies'} element={<ProficienyList/>}><p>Proficiencies</p></Link>
                <Link to={'/equipment'} element={<Equipment/>}>Equipment</Link>
            </div>
            
        </main>
    )
}
export default Home