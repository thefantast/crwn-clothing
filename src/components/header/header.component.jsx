import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';


import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.style';


const Header = ({currentUser, hidden}) => (
     
    <HeaderContainer>

        <LogoContainer to="/">
            <h5>MUNDI</h5>
        </LogoContainer>

            <OptionsContainer>



                <OptionLink to='/shop'> 
                <p>Curated Art</p>
                </OptionLink>


                <OptionLink to='/shop'> 
                <p>Marketplace</p>
                </OptionLink>
                <OptionLink to='/shop'> 
                <p>Contact</p>
                </OptionLink>
                {
                    currentUser ?(
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                    <p>SIGN OUT</p>
                    </OptionLink>
                    ):(
                    <OptionLink to='/signin'>
                    <p>SIGN IN</p>
                    </OptionLink>
                    )
                } 
                <CartIcon />
            </OptionsContainer>
                
                {
                    hidden ? null :
                    <CartDropdown />
                }
    </HeaderContainer>
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