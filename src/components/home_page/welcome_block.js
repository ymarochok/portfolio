import { useNavigate } from "react-router-dom"

export default function Welcome_block(){
    let navigate = useNavigate();

    return(
        <div className="main" id="main">
            <div>
            <h1>Welcome!</h1>
            <p>Welcome to my portfolio web-page. My name is Yaroslav Marochok.</p>

            <div className="row">
                <a href="#about"> <button> About Me </button> </a>
                <button onClick={() => navigate('/projects')}> Projects </button>    
            </div>
            </div>
        </div>
    )
}