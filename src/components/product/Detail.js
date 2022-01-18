import React, {useContext, useState} from "react";
import { Row, Col, Image, Divider, Input, Button } from 'antd'
import { ToastContainer, toast } from 'react-toastify';
import { useParams, Link } from "react-router-dom";
import { ProductContext } from "../../context/productContext";

const Detail = () => {
   
    const {slug} = useParams()
    const { products, activeCard } = useContext(ProductContext)
    const { cardData, setCardData } = activeCard
    const product = products.find(product => product._id == slug)
    
    const [ input, setInput ] = useState(1)


    const handelUpdateCard = () => {    

        const session = Math.random()

        product.count = input 
        product.session = session 
        setCardData([...cardData, product])
        toast.success('🦄 Da them vao gip hang!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        
    }
    
    return (
       
        <Row justify="space-around">
            <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            <Divider orientation='left' style={{fontSize:20}}>Chi tiet san pham</Divider>
            <Col lg={{ span: 9, offset: 2 }}>
                <h2>{product.name}</h2>
                <Image width={600} height={500} src={product.img} ></Image>
            </Col>
            <Col lg={{ span: 9, offset: 2 }}>
                <h2>Price: {product.price}</h2>
                <Input value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="So luong"
                ></Input>
                <Button><Link to="/" >Mua tiep</Link></Button>
                <Button onClick={handelUpdateCard} >Mua ngay</Button>
            </Col>
        </Row>
    )
}

export default Detail