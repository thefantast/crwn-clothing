import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';


import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';


const Header = ({currentUser, hidden}) => (
     
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
                <CartIcon />
            </div>
                
                {
                    hidden ? null :
                    <CartDropdown />
                }
    </div>
);


//this naming of the function can be anything but mapStateToProps is standart in redux
// get the currentUser from the reducer UserReducer - state is the connection to
//the reducer. user get in the user array and currentUser get the actual user

// allows us to access the state
const mapStateToProps = (state) => createStructuredSelector({

currentUser: selectCurrentUser,
hidden: selectCartHidden

})

export default connect(mapStateToProps)(Header);