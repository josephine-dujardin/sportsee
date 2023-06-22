import { Link } from 'react-router-dom'
import './home.css';

/**
 * Display homePage
 *
 * @return {JSX}
 */

function Home() {
    return (
        <div className="Home">
            <h1 className="h1">HomePage</h1>
            <Link className="user-link" to="/user/12">
                <p>❖ user_12</p>
            </Link>
            <Link className="user-link" to="/user/18">
                <p>❖ user_18</p>
            </Link>
        </div>
    )
}

export default Home