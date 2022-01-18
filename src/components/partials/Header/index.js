import React, { useContext} from 'react'
import { Row, Col, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined, DownOutlined } from '@ant-design/icons'
import '../Header/index.css'
import { ProductContext } from '../../../context/productContext'
import Auth from './Auth'

import CardInfo from './CardInfor'


const Header = () => {
    const {activeCard} = useContext(ProductContext)
    const {cardData, setCardData} = activeCard

    return (
        <Row style={{padding:20, backgroundColor:"#605dc0"}}>
                      
            <Col span={18}>
                  <Link className='header__item' to="/">Home</Link>
                  <Link className='header__item' to="/about">About</Link>
            </Col>
            <Col span={6}>
                <div className='header__item header__icon'>
                <Auth />
                <Dropdown className='header__item' overlay={<CardInfo cardData={cardData} setCardData={setCardData}/>}>
            
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <ShoppingCartOutlined />
                    <span> - { cardData == [] ? '0': cardData.length }</span>
                    </a>
                </Dropdown>

                    
                </div>    
            </Col>
              
        </Row>
    )
}

export default Header