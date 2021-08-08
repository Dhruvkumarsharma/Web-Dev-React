import React, { Component } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import Product from './Product/Product';
import './Product.css';


const Products = ({product}) => {
    return (
        <div className="products">
            {product.map( (prod)=>(
                <Product key={prod.id} prod={prod}></Product>
             ) )}

        </div>
        
      );
}

const mapStateToProps = (store) => { 
    return store;
}
 
export default connect(mapStateToProps,)(Products);