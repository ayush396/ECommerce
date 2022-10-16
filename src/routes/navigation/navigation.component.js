import { Outlet,Link } from 'react-router-dom'
import logo from './logo.jpg'
import './navigation.style.css'
import {useContext} from 'react'
import { UserContext } from '../../contexts/user.context'
import { UserSignOut } from '../../utils/firebase/firebase.utils'

const Navigation = ()=>{
    const {currentUser} = useContext(UserContext)
    console.log(currentUser);
    

    return (
        <div>
            <div className='nav'>
                <Link to='/'><img src={logo} style={{display:'inline-block'}} className="pics" alt=""/></Link>
                <h1 className='heading'>E-Commerce</h1>

                <Link className='shop' to="/shop">
                <p>SHOP</p>
                <div className='underline' id='ul1'></div>
                </Link>
                <Link className='contact' to="/contact">
                <p>CONTACT</p>
                <div className='underline'></div>
                </Link>
                {
                    currentUser?(<Link className='signin' onClick={UserSignOut}>
                    <p>SIGN OUT</p>
                    <div className='underline'></div>
                    </Link>):(<Link className='signin' to="/signIn">
                    <p>SIGN IN</p>
                    <div className='underline'></div>
                    </Link>)
                    
                }
                
                
            </div>
            <Outlet/>
        </div>
        
    )
}
export default Navigation