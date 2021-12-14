import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K6g1lCTMkh07LmKoeaPiUSKQsoahwoucyTNS4kGH7kXGIz187F1MpzZFjlR1aaPlXdLIepYRkUxdywzgSyrBWUp00OrNdEXZZ'

   const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/updownload/file/script/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'         
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
