import { Carousel, Image, Row, Col } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: '100%'
};

const Slide = () => {
    return (
        <Row>
            <Col span={24}>
        <Carousel autoplay>
            <Image preview={false} style={contentStyle} src='https://media.istockphoto.com/photos/loser-drops-the-wedding-cake-picture-id618870618?k=20&m=618870618&s=612x612&w=0&h=tiHbgVzmWhdpsYpC1YqAA0zPSnGvmKAh4AXmk_A2ji0='></Image>
            
        </Carousel>
        </Col>
        </Row>
    )
}

export default Slide