import React from 'react'
import { Menu, Image, Button, Empty } from 'antd';
import { Link } from 'react-router-dom';


const CardInfo = ({cardData, setCardData}) => {
    
    const handleDeleteItem = (session) => {
     
      const newCards = cardData.filter(item => item.session !==session)
      setCardData([...newCards])
    }
   
    return (
        <Menu>
            {
              cardData == false ? (

              <Empty key={1} />
            ) : (

              cardData.map((item, index) => (
                <Menu.Item key={index}>
                <img width={45} height={45} src={item.img} />
                <span target="_blank" rel="noopener noreferrer" href="#">
                  {item.name}
                </span>
                <div className='cardInfo__right'>
                  <span> - {item.count} </span> 
                  <span
                    style={{padding:5}}
                    onClick={() => handleDeleteItem(item.session)}
                    >
                    x</span>
                </div>
              </Menu.Item>))
               
            )}
        <Button><Link to='/cart'>To cart</Link></Button>    
        </Menu>
    )
   }   

export default CardInfo