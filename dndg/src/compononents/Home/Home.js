import Class from "../Class/Class"
import {Link} from 'react-router-dom'
function Home(){

    return(
        <main>
            <div className="index">
                <Link to={'/classes'} element={<Class/>}><p>Classes</p></Link>
            </div>
            <div className="Search">
                <form>
                    <input type='search'></input>
                    <input type='submit'/>
                </form>
            </div>
        </main>
    )
}
export default Home