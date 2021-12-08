import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';


import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';


const Header = ({currentUser}) => (
     
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className='logo' />
        </Link>

            <div className='options'>
                <Link className='option' to='/shop'> 
                Shop
                </Link>
                <Link className='option' to='/shop'> 
                Contact
                </Link>
                {
                    currentUser ?(
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
                    ):(
                    <Link className='option' to='/signin'>SIGN IN</Link>
                    )
                }
                

        </div>
    </div>
);


//this naming of the function can be anything but mapStateToProps is standart in redux
// get the currentUser from the reducer UserReducer - state is the connection to
//the reducer. user get in the user array and currentUser get the actual user
const mapStateToProps = state => ({

currentUser: state.user.currentUser

})

export default connect(mapStateToProps)(Header);