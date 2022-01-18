import { Col, Row, Table, Button, Image, Input, Modal, Divider } from "antd";
import React, { useContext, useState} from "react";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'

import {ProductContext} from '../../context/productContext'
import { Link } from "react-router-dom";


const Cart = () => {

    const { activeCard } = useContext(ProductContext)
    const {cardData, setCardData} = activeCard
    let [inputProd, setInputProd] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    
    const columns = [
        {
            key: '1',
            title: 'STT',
            dataIndex: 'id' 
        },
        {
            key: '2',
            title: 'Img', 
            dataIndex: 'img',
            render: img => (
                <Image width={100} height={100} src={img}></Image>
            )
        },
        {
           
            key: '3',
            title: 'Ten san pham',
            dataIndex: 'name' 
        },
        {
            key: '4',
            title: 'so luong',
            dataIndex: 'count',
            render: item => {
                return (
                    <>
                    <Button onClick={()=>handleDownCount(item)}>-</Button>
                    <span style={{padding: 10}}>{item.count}</span>
                    <Button onClick={()=>handleUpCount(item)}>+</Button>
                    </>
                )
            }
        },
        {
            key: '5',
            title:'action',
            dataIndex: 'action',
            render: (record) => {
               return (
                <>
                <DeleteOutlined onClick={() => handleDelete(record)} />
              </>
               )
            }
        }

    ]
    
    const handleUpCount = item => {
        cardData.map(prod => prod.session === item.session ? prod.count++ : prod.count )
        setCardData([...cardData])
    }
    const handleDownCount = item => {
        cardData.map(prod => prod.session === item.session ? prod.count-- : prod.count )
        setCardData([...cardData])
    }

    const data = cardData.map((item, index) => {
       return {
           key: index,
           id: item._id,
           img: [item.img],
           name: item.name,
           count: item,
           action: item,
           isEditfeild:false
       }
    })

    const handleDelete = (record) => {
         const data = cardData.filter(item => item.session !== record.session) 
         setCardData([...data])
    }


   return (
       <Row>
           <Col span={16} offset={4}>
               <Divider orientation="left">Gio hang cua toi</Divider>
                <Table columns={columns} dataSource={data}></Table>
                <Button><Link to='/checkout'>Checkout</Link></Button>
                <Button style={{marginLeft: 20}} type="primary"><Link to='/'>Shoping now</Link></Button>
           </Col>
       </Row>
   )
}

export default Cart