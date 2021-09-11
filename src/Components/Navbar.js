import React, {useState} from 'react'
import { Link } from "react-router-dom";
export default function Navbar(props){
    const [mode, setMode] = useState('light')
    const toggleMode = ()=>{
        if(mode==='light'){
        props.setNewsStyle({backgroundColor: '#2A0944', color: 'white'})
        document.body.style.backgroundColor = "#2A0944";
        props.setNewsItemStyle({backgroundColor: '#3B185F', color: '#FEC260'})
        setMode('dark')
        props.setBtnMode('light')
        }
        else{
            props.setNewsStyle({backgroundColor: 'white', color: 'black'})
        document.body.style.backgroundColor = "white";
        props.setNewsItemStyle({backgroundColor: 'white', color: 'black'})
        setMode('light')
        props.setBtnMode('dark')
        }
    }

    return (
            <div>
                <nav className={`navbar navbar-expand-lg fixed-top navbar-${mode} bg-${mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">News Guru</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/general">General</Link></li>
                                        <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" onClick={toggleMode} id="flexSwitchCheckDefault"/>
                            </div>
                            <form className="d-flex">
                                <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
                                <button className ="btn btn-outline-success" type ="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
}
