import React from 'react'
import { Card, Col, Image } from 'antd'
import { Link } from 'react-router-dom'

const { Meta } = Card
const Product = ({product}) => {

   return (
    <Col xl={4} sm={12} xs={24}>
      <Card
        hoverable
        >
        <Image src={product.img} height={200}  preview={false}/>
        <Link to={{pathname: `/product/${product._id}`}}><Meta title={product.name} description="www.instagram.com" /></Link>
        <Meta title={product.price} />
     </Card>,
     </Col>
   )
}

export default Product