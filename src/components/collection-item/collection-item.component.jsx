import React from 'react';
import { connect } from 'react-redux';
import BlurOnIcon from '@mui/icons-material/BlurOn';

import { Link } from 'react-router-dom';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.actions';

//functional Component

const CollectionItem = ({ item, addItem}) => {
    const {  name, price, imageUrl, artistName } = item;
    return(
        
    <div className='collection-item'>
    
        <div className='image'
            style={{ 
                backgroundImage: `url(${imageUrl})`
            }}
        >
        
        </div>
        
        

        <div className='collection-footer'>
                <h3 className='name'>{ name }</h3>
                <span className='artistName'>{ artistName }</span>
                <h4 className='price'> <BlurOnIcon />{ price }</h4>
                  
                

        </div>
        
        <div className="ButtonSection">
          <Link to="/productPage">  <div className="ProductButton">Product Details</div> </Link>

        <CustomButton onClick={() => addItem(item)} inverted>
            Add to cart 
        </CustomButton>
        </div>

    </div>
    
    )};

    const mapDispatchToProps = dispatch => ({
        addItem: item => dispatch(addItem(item))
    })

    export default connect(null,
        mapDispatchToProps)
        (CollectionItem)