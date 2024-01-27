import { Link } from 'react-router-dom'
import './LogoBanner.css'
import logo from '/thoughts-logo.png'

const LogoBanner = () => {
    return (
        <div className='logo'>
            {/* <h1 className='logo'>Thoughts Of The Heart</h1> */}
            <Link to="/"><img src={logo} alt="logo" />
            </Link>
        </div>)
}

export default LogoBanner