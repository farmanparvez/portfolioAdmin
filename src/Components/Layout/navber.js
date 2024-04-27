import { useState } from "react"
import { CgShapeCircle } from "react-icons/cg"
import { GiHamburgerMenu } from "react-icons/gi"
import { useNavigate, NavLink } from "react-router-dom"
import { logout } from "../../Redux/actions/authActions"
import { reset } from "../../Redux/reducers/authReducer"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-scroll'
import "./styles.css"

const Navber = () => {
    const [show, setshow] = useState(false)
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    console.log(window.location.pathname)
    return (
        <>
            <div className="navber">
                <nav>
                <h1 className="logo" onClick={() => navigate('/')}>{"<Code>"}</h1>
                {/* <h1 className="logo" onClick={() => navigate('/')}><CgShapeCircle className="cg" />{"<Code>"}</h1> */}
                    <div className="left">
                        <ul className={show ? "nav ul mobile" : "nav ul"}>
                          {/* {window.location.pathname !== '/' ?  <li><NavLink to='/' activeClassName="active" spy={true} smooth={true} offset={-100} duration={500}>Home</NavLink></li> :
                            <li><Link to='home' activeClassName="active" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li> } */}
                            <li><Link to='home' activeClassName="active" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li> 
                            <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>skills</Link></li>
                            <li><Link to="work" spy={true} smooth={true} offset={-100} duration={500}>work</Link></li>
                            <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>about</Link></li>
                            <li><Link to="education" spy={true} smooth={true} offset={-100} duration={500}>Eduction</Link></li>
                        </ul>
                    </div>
                    <div className="right">
                        {!user && <NavLink to="/login" className="btn">Login</NavLink>}
                        {user && <NavLink to="" className="btn" onClick={onLogout}>Logout</NavLink>}
                    </div>
                    <div className="humberger" onClick={() => setshow(!show)} ><GiHamburgerMenu /></div>
                </nav>
            </div>
        </>
    )
}
export default Navber;