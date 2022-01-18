import React from "react"
import {Row, Col, Divider, Image} from 'antd'

const About = () => {
    return (
        <Row>
            <Divider orientation="left">About</Divider>
            <Col span={12} offset={6}>
                <Image  preview={false} src='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2VvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' ></Image>
            </Col>
            <p></p>
        </Row>
    )
}

export default About