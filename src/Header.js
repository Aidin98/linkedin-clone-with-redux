import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcons from '@material-ui/icons/Notifications'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'
function Header() {
    const user=useSelector(selectUser)
    const dispatch=useDispatch()
    const logoutOfApp=()=>{
        dispatch(logout())
        auth.signOut()
        console.log('uslo je')
    }
    return (
        <div className='header'>
       
            <div className='header__left'>
                <img src='https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1615368955~hmac=c3ed34e431adc3ffc9334d07c95edb05' alt='' />
            
                <div className='header__search'>
                            <SearchIcon />
                    <input placeholder='Search'  type='text' />
                </div>
            </div>
            <div className='header__right'>
                <HeaderOption title='Home' Icon={HomeIcon} />
                <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
                <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
                <HeaderOption title='Messaging' Icon={ChatIcon} />
                <HeaderOption title='Notifications' Icon={NotificationsIcons} />
                <HeaderOption  avatar={true} title={user?.displayName} onClick={logoutOfApp}/>

            </div>
        </div>
    )
}

export default Header
