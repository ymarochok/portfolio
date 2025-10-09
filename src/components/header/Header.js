import './header.scss';
import { Link, Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header(){
    return(
        <div className="header">
            <h2>Portfolio</h2>
           
            <ul>
                {/* <Router> */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">My Projects</Link></li>
                    <li><HashLink to="/#about">About me</HashLink></li>
                {/* </Router> */}
            </ul>
        </div>
    )
}