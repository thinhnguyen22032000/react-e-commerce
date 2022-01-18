import React, { useContext } from 'react'
import {ProductContext} from '../../context/productContext'
import Product from './Product'
import {Row, Divider} from 'antd'

const Products = () => {
    const {products}  = useContext(ProductContext)
    
    // style
    
    return (
        <Row gutter={10}>
            <Divider orientation='left' style={{fontSize:20}}>Banh ngot</Divider>
            
            {
                products.map((item, index) => (
                    <Product key={index} product={item} />
                ))
            }
            
        </Row>
    )
}

export default Products