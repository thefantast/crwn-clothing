import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => (
    <div className="wholepage">
    <Header />
    <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
    </div>
    <Footer />
    </div>
);

export default SignInAndSignUp;