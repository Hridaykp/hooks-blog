import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <ul>
                <li to="/" ><Link>Home</Link></li>
                <li to="/create-post"><Link>Create Post</Link></li>
            </ul>
        </div>
    );
}
export default Navbar;
