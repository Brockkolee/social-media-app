import React from 'react'
import { auth } from '../../firebase'
import LogoutIcon from '@mui/icons-material/Logout';
import './Menu.css'

const Menu = (props) => {

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className={props.className}>
      <button className='menu-logout-button' onClick={signOut}><LogoutIcon></LogoutIcon>Log Out</button>
    </div>
  )
}

export default Menu